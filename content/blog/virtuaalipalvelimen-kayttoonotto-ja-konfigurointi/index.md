---
title: "Virtuaalipalvelimen käyttöönotto ja konfigurointi"
date: "2017-09-28"
featuredImage: ./Zebra-small.jpg
---

Tämä teksti on luotu ohjeeksi Ubuntu 16.04 virtuaalipalvelimen luomiselle ja käyttöönotolle DigitalOceanin pilvi- ja hostingpalvelussa

>" Virtuaalipalvelimet vastaavat tavallisia palvelimia sillä erotuksella, että virtuaalipalvelimissa käyttäjä ei omista laitetta kokonaan, vaan samassa koneessa ajetaan virtuaalisesti monta palvelinta. "

Siinä missä fyysisen palvelimen ajaminen omasta kellarista voi vaikuttaa jännittävältä, katu-uskottavalta harrastuneisuudelta, virtuaalipalvelimen vuokraus on halpa ja käytännöllinen tapa nostaa nopeasti pystyyn palvelin, joka on pystyttäjästä riippuen käytännössä minuuteissa tai tunneissa avattu ikkuna tuoda oma tuote lähes kaikkien maailman ihmisten saataville.

Blogipostaus käsittelee siis virtuaalipalvelimen pystyttämistä erään palveluntarjoajan virtuaalisen palvelintilan vuokrauksesta itse palvelimen pystyttämiseen ja sen  konfigurointiin. Käyttöön valikoitui juuri DigitalOcean, koska [GitHub Student Pack](https://education.github.com/pack):n kautta allekirjoittanut sai käyttöönsä 50 dollaria "starttirahaa". Virtuaalipalvelimia vuokraavat tänä päivänä kuitenkin monet eri yritykset ja ennen pystyttämistä kannattaakin käydä hieman tutkimassa eri palveluntarjoajien hintoja ja tarjottavia speksejä. Muutamia tällaisia yhtiöitä ovat mm. [DigitalOcean](https://www.digitalocean.com/), [Linode](https://linode.com/) ja [Heroku](https://www.heroku.com).

### Virtuaalipalvelimen käyttöönotto

#### Ensin luodaan tili palveluun

Virtuaalipalvelimen pystytys lähtee samasta kuin mikä tahansa internetin yli myytävän palvelun käyttö tänä päivänä. Ensin luodaan käyttäjätili palveluntarjoajan sivuilla, syötetään tietoja ja valitaan maksutapa – palvelun tarjoajan bisnesmallin turvaamiseksi ja edes jonkinsortin luotettavuuden mittaamiseksi – joko luottokortti tai PayPal.

Tämän jälkeen uusi käyttäjä saa yhtiöltä vahvistussähköpostin, jonka läpi klikkailtuaan on tullut avanneeksi tilin omassa tapauksessa esimerkiksi DigitalOceaniin. Tämän jälkeen pääseekin jo pystyttämään itse virtuaalipalvelinta.

#### Virtuaalipalvelin pystyyn

Kirjautumisnäkymän oikeasta ylälaidasta voidaan valita vihreän Create -drop downin alta Droplets, mistä päästään uuden virtuaalipalvelimen pystyttämisen äärelle.

Valittavaksi löytyy ensin käytettävä Linux distro. Omaan droplettiin distroksi valikoitui aiemmasta käytöstä tututuksi tullutUbuntu 16.04. Tämän jälkeen seuraa virtuaalipalvelimen speksit, joiden valinta vaikuttaa myös kuukausilaskutettavaan hintaan. Nyrkkisääntönä tähän voisi pitää, että mikäli et tiedä minkä verran rautaa/liikennettä tarvit palvelimen taakse valitse vähemmän. Palvelimen speksien päivittäminen ylöspäin on huomattavasti helpompaa kuin niiden tiputtaminen.

"Add block storage" antaa käyttäjälle mahdollisuuden määritellä tai vaikkapa laajentaa omaa virtuaalipalvelimen tallennustilaa. Pienen palvelimen pystyttämisessä tämä ei kuitenkaan ole tarpeellista.

Tämän jälkeen valitaan missäpäin maailmaa sijaitsevalle konesaliin virtuaalipalvelin sijaitsee. Tunnilla käydyn keskustelun pohjalta voisi mainita, että konesalin sijainnin valintaa miettiessä kannattaa pohtia mistäpäin maailmaa oletat kävijäsi palveluusi surffaavan.

Konesalin valinnan jälkeen voi valita vielä itselleen maksullisia lisäpalveluita varmuuskopioinnin yms. muodossa mikäli niitä tarvitsee sekä määrittää SSH-avaimen, mikäli sellaista tahtoo käyttää.

Viimeisenä asiana virtuaalipalvelimen luomisessa ennen itse asetuksiin pääsemistä määritellään vielä virtuaalipalvelimen nimi, eli hostname mikä kannattaa hyvien nimeämiskäytäntöjen mukaisesti olla kuvaava ja mielellään lyhyt. Yksilöivä nimi kertoo käyttäjälle heti mistä koneesta on kyse. Tämä helpottaa työskentelyä homman mahdollisesti skaalautuessa kun hallittavia palvelimia on useampia. Kohtuullisen lyhyt nimi siksi, että nimeä joutuu syöttämään mm. SSH-yhteydellä kirjautuessa.

Lopuksi klikataan sivulta alimmaisena löytyvästä vihreästä Create -napista ja volá ensimmäinen virtuaalipalvelin on luotu.

### Virtuaalipalvelimen konfigurointi SSH-yhteydellä

#### Yhteys palvelimeen ja uuden root-salasanan määritteleminen

Hetki sitten luotu virtuaalipalvelin on nyt siis pystyssä ja siihen pääsee käsiksi komentokehotteen kautta SSH (Secure Shell) -yhteydellä. Lähteenä tässä konffausprosessissa käytin Linux Palvelimet kurssin tuntiopetusta ja samalla syntyneitä muistiinpanoja. Samaiset tiedot löytyvät myös [täältä](http://terokarvinen.com/2017/first-steps-on-a-new-virtual-private-server-an-example-on-digitalocean).

Ensimmäisessä kirjautumisessa käytettävä root-käyttäjän salasana on lähetetty sähköpostiin virtuaalipalvelimen luonnin yhteydessä. Virtuaalipalvelimen ip-osoite löytyy samaisesta spostista ja jatkossa myös aina DigitalOceanin Droplets näkymästä. Otetaan yhteys virtuaalipalvelimeen komennolla **ssh root@droplet-valikosta-löytyvä-ip-osoite**, jonka jälkeen komentokehoite pyytää syöttämään salasanan. Kuten aina, komentokehoite ei salasanojen syöttämisen yhteydessä indikoi ruudulle mitään käyttäjän antamasta syötteestä tai vaikkapa sen pituudesta vaan salasanan näpyttelyn jälkeen eteenpäin siirrytään enter-näppäimellä.

```Bash
ssh root@192.x.x.x
root@192.x.x.x's password:
```

Oikein syötetyn salasanan jälkeen käyttäjää pyydetään heti määrittämään root-käyttäjälle uusi salasana.

**Huom! Uusi salasana, aivan kuten jatkossa muutkin virtuaalipalvelimelle määriteltävät salasanat (ja optimaalisesti tietysti kaikki käytettävät salasanat) tulee olla vahvoja, hyvien salasanakäytäntöjen mukaisesti määriteltyjä. Virtuaalipalvelin on näkyvillä internettiin ja näin ollen myös altis mahdollisille murtautumisyrityksille.**

On tärkeää ymmärtää, että pystyttäessä virtuaalipalvelimen, palvelin on "näkyvillä" internettiin. Tämä totta kait on palvelimen tarkoitus, mutta samalla tulee altistaneeksi kyseisen palvelimen internetin varjopuolille, kuten vaikkapa salasanoja automaattisesti testaaville ohjelmistoille, joiden ainoa tarkoitus on pyrkiä löytämään heikot salasanat ja päästä hyödyntämään huonoilla salasanoilla suojattuja koneita. Tämän postauksen loppupuolella omistan kappaleen pystytetyn palvelimen logitiedoille ja sille, miten nämä automaationa toimivat testausohjelmat koputtelevat joka hetki virtuaalipalvelinten oville ja testaavat kuka onneton on jättänyt omansa huonosti kiinni. Hyvien salasanojen käyttäminen on siis erittäin tärkeää. Hyvistä salasanakäytännöistä pääset lukemaan esimerkiksi Viestintäviraston Kyberturvallisuuskeskuksen koostamasta [dokumentista](https://www.viestintavirasto.fi/attachments/tietoturva/Salasanat_haltuun.pdf).

#### Uuden käyttäjätilin luominen ja root tilin tilkitseminen

Ensimmäisen roottikirjautumisen ja uuden salasanan määrityksen jälkeen siirytään luomaan oma uusi pääkäyttäjä ja salasana (hyvien salasanakäytäntöjen mukaisesti), määritellään käyttäjätilin oikeudet sekä otetaan tulimuuri käyttöön ja avataan siihen reikä ssh-yhteyksille. Uusi käyttäjätili luodaan komennolla **sudo adduser käyttäjän-valitsema-käyttäjätilin-nimi**. Käyttäjätilin nimeämisen suhteen hyvä ohjenuora on, että parhain nimi on lyhyt, kuvaava ja kirjaimista koostuva käyttäjätunnus.

Käyttäjätilin luomisen jälkeen tilille määritellään pääkäyttäjätason oikeudet. Tässä tapauksessa luodulle käyttäjätilille myönnetään sudo-oikeudet, että hetkeä myöhemmin voidaan tilkitä rootti ja siirtyä hallinnoimaan virtuaalipalvelinta nyt luodulla käyttäjällä.

Lopuksi puhkotaan tulimuuriin reikä ssh-yhteyksille ja otetaan itse tulimuuri käyttöön.

```Bash
sudo adduser jarmo
sudo adduser jarmo sudo

sudo adduser jarmo adm
sudo adduser jarmo admin

sudo ufw allow 22/tcp
sudo ufw enable
```

Käyttäjätilin luomisen jälkeen siirrytään testaamaan hetkeä aiemmin luodun tilin pääsy virtuaalipalvelimelle sekä annetut pääkäyttäjäoikeudet. Mikäli homma on toiminut kuin Strömsössä uusi ssh-yhteys pystytään luomaan komennolla ssh  **käyttäjän-valitsema-käyttäjätilin-nimi@192.x.x.x**. Mikäli yhteys toimii ja virtuaalikoneelle päästään kirjautumaan sisään testataan käyttäjän sudo-oikeudet yksinkertaisella pakettien päivittämisellä komennolla **sudo apt-get update**.Mikäli paketit päivittyvät onnistuneesti voidaan seuraavaksi siirtyälukitsemaan root-käyttäjän tunnukset, jonka jälkeen käynnistetään vielä ssh-client uudestaan sekä varmentamaan tämän jälkeen root-käyttäjätilin lukitus.

Ensin varmistetaan uuden käyttäjän pääsy virtuaalipalvelimelle

```Bash
ssh jarmo@192.x.x.x
```

Tämän jälkeen varmistetaan uuden käyttäjän sudo-oikeudet

```Bash
sudo apt-get update
```

Mikäli sudo apt-get update -komennolla onnistuttiin päivittämään paketinhallinnan viimeisimmät listat ilman ongelmia lukitaan root-käyttäjän tili komennolla

```Bash
sudo usermod --lock root
```

ja vaihtamalla sshd\_config -tiedostosta Authentication -kohdasta "PermitRootLogin yes" kieltoon " PermitRootLogin no".

```Bash
sudoedit /etc/ssh/sshd\_config

\# Authentication:

PermitRootLogin no
```

Tämän jälkeen ajetaan ssh:n restart

```Bash
sudo service ssh restart
```

Ja lopuksi voidaan vielä varmistua rootin lukituksesta sulkemalla käytössä oleva ssh-yhteys komennolla exit ja yrittämällä kirjautua sisään root-tunnuksilla.

```Bash
ssh root@192.x.x.x
exit
```

### Hyvä salasana todella kannattaa

Virtuaalipalvelin kalskahtaa vielä allekirjoittaneenkin korvaan yhä hienolta ja monimutkaiselta laitteena jossain kaukana sinistä valoa hohkaavien konesalien syöverissä. On kuitenkin mukavaa, lohdullista ja ehkä jopa hieman koomistakin muistaa, että siellä langan toisessa päässä hyrrää aivan samalla tavalla tietokone valitun käyttöjärjestelmä-distron (omassa tapauksessa Ubuntu16.04 LTS) lainalaisuuksineen. Ja yksi hienous tästä on se miten SSH-yhteyden yli kirjautuneena komentokehotteelta käyttäjällä on mahdollisuus päästä analysoimaan virtuaalipalvelimen logitietoja.

Logitietoja kannattaa opetella selailemaan. Ne tarjoavat paitsi elintärkeää tietoa eri ongelmatilanteisiin, myös paljon oppia siitä mitä taustoissa graafisten käyttöliittymien näkymättömissä tapahtuu. Näin ollen pystyy esimerkiksi seuraamaan sitä kuinka nopeasti automaattiset ohjelmat yrittävät murtautua virtuaalipalvelimiin jota on suojattu huonolla salasanalla.

Siispä virtuaalipalvelimelle kirjautumisen jälkeen voidaan hetken päästä pystytyksestä kokeilla omaksi huviksi printata viimeisimmät tallentuneet käyttäjien kirjautumisia koskevat logitiedot ja analysoida niitä hieman.\

Haetaan tail-komennolla kirjautumista koskevien logitietojen kymmenen viimeistä kirjausta

```Bash
tail /var/log/auth.log.1
```

Ruudulle printtaantuu useita logitapahtumia epäonnistuneita kirjaantumisista joissa "salasana on syötetty väärin". Logeista voi lukea vaikkapa

  ```Bash
message repeated 2 times: \[ Failed password for root from 59.45.175.96 port 48195 ssh2\]
```

Komentoa whois käyttämällä voi onkia hieman lisätietoja epäonnisen kirjautumisen tehneestä ip-osoitteesta

```Bash
whois 59.45.175.96
```

Whois kertoo kyseisen ip-osoitteen tulevan Koilis-Kiinasta, Shenyangin kaupungista. Verkko-operaattoriksi mainitaan China Telecom. Whois listaa samassa yhteydessä myös muita tietoja kuten vaikkapa sähköpostin, puhelinnumeron ja osoitetietoja, mutta näillä ei sinänsä ole tietenkään mitään väliä. Vaikka annetut tiedot johonkin oikeaan osoitteeseen/spostiin/puhelinnumeroon lopulta johtaisivatkin sieltä tuskin vastaisi kyseinen murtautumista yrittänyt keijo. Ja toisaalta Shenyangin poliisilaitoksella lienee muutakin tekemistä kun juosta näiden veijareiden perässä. Jotenka tarinan opetus lienee lopulta se, että hyvä salasana todella kannattaa. Se on helpoin ja varmin keino pistää hanttiin tämänsorttiselle toiminnalle.

Ensimmäisellä kerralla aikaa virtuaalipalvelimen pystyttämiseen allekirjoittaneelta tilin avaamisesta viimeiseen konfaukseen meni noin puolitoista tuntia. Blogipostauksen lähteinä on käytetty Haaga-Helian syksyn 2017 mainiota Linux palvelimet -kurssia, sekä kurssin opettajan Tero Karvisen [blogipostausta](http://terokarvinen.com/2017/first-steps-on-a-new-virtual-private-server-an-example-on-digitalocean) aiheesta.

_Tämä blogipostaus liittyy Haaga-Helian tietojenkäsittelyn opintoihini ja ennen kaikea [Linux palvelimet ict4tn021](http://terokarvinen.com/2017/aikataulu-linux-palvelimet-ict4tn021-4-ti-ja-5-to-alkusyksy-2017-5-op) -kurssiin, jonka rakenteesta, oppimistavoitteista ja aikataulusta voit lukea lisää [täältä](http://207.154.212.16/syksyn-opinnot-linux-palvelimet-ict4tn021/)._

_Edit 13.12.2017: Terävöitetty postauksen tekstiä ohjeistamaan paremmin uuden käyttäjätunnuksen luonnissa._

_Edit 15.12.2017: Korjattu hyvää salasanaa ja logitietoja koskevan osiota, sekä tarkennettu pystyttämiseen kulunutta aikaa sekä apuna käytettyjä lähteitä._

_Edit 15.12.2017: Korjattu ulkoasua harmaiden koodiboxien osalta._
