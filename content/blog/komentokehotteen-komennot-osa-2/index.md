---
title: "Komentokehotteen komennot osa 2"
date: "2017-11-23"
featuredImage: ./Zebra-small.jpg
---

\[vc\_row row\_type="row" use\_row\_as\_full\_screen\_section="no" type="full\_width" angled\_section="no" text\_align="left" background\_image\_as\_pattern="without\_pattern" css\_animation=""\]\[vc\_column\]\[vc\_column\_text css=".vc\_custom\_1511437595976{padding-top: 32px !important;padding-bottom: 32px !important;}"\]Tässäpä nyt luettavaksi teksti "Komentokehotteen komennot osa 2", joka kertoo päivittäisiä tiedostojen luomista muokkaamista, kopiointia ja poistamista käsittelevistä komentokehoitteen komennoista.

Blogipostauksen "Komentokehotteen komennot osa 1" voit lukea [täältä](http://207.154.212.16/komentokehotteen-komennot-osa-1/). Pari kuukautta sitten kirjoitin myös siitä, miten "Jokaisen mac-käyttäjän tulisi tuntea Linuxin komentokehoite" Tämän komentokehoitteiden komennoista kirjoittamiseen innoittaneen postauksen pääset lukemaan puolestaan [täältä](http://207.154.212.16/jokaisen-mac-kayttajan-tulisi-tuntea-linuxin-komentokehote/). Mahdollisille uusille lukijoille pohjustan tämän komentokehoitteen komentoja käsittelevän jälimmäisen postauksen edellisestä osasta tutulla avauksella.

Yksinkertaistava otsikko oli tarkoitettu niputtamaan yhteen ajatus, että linux distroilla "heavy lifting" tehdään yleensä komentokehotteesta. Se on helpompi, nopeampi, mukavampi ja noin 85% katu-uskottavampi tapa käytellä tietokonetta päivittäisissä tehtävissä. Ja kuten aikaisemmassa tekstissä tuli todettua, mäkissä ajettava käyttäjärjestelmä polveutuu 1970 luvun UNIX -käyttöjärjestelmään ja on näin ollen löysästi ilmaisten jonkinlainen linux distrojen serkku. Tästä seuraa se ihanuus, että mitä enemmän opit vaikkapa Ubuntulla komentokehotteessa toimivia hyviä käytäntöjä valuvat nämä opit samalla lähes yksi yhteen käytettäväksi myös maceissä.

Lähestulkoon heti jutun kirjoittamisen jälkeen huomasin kuitenkin kirjoituksessa melko karkean heikkouden. Kirjoitin komentokehotteen hallitsemisen tärkeydestä ilman, että tuli kirjoitettua riviäkään siitä miten komentokehotetta oikeastaan käytetään. Eli kirjoitetaanpa nyt sitten seuraavaksi siitä käytöstä.

_"Komentoliittymä, komentorivi eli komentokehote (engl. command line interface, CLI) on tapa järjestää ihmisen ja tietokoneen välinen kommunikointi."_ [¹](https://fi.wikipedia.org/wiki/Komentoliittym%C3%A4)

Mielestäni loistava vertaus lähestyä komentokehotteen ja sen käyttelemiseen vaadittavien komentojen tunteminen tärkeyttä asiaan vihkiytyneelle on ajatella, kuinka tärkeää puusepälle on sahan tai vasaran käytön osaaminen.\[/vc\_column\_text\]\[blockquote text="Komentokehote koodarille on kuin vasara puusepälle" show\_quote\_icon="yes"\]\[vc\_column\_text css=".vc\_custom\_1511436864130{padding-top: 32px !important;padding-bottom: 32px !important;}"\]Ajatuksen omaisesti komentokehotetta voisi lähestyä graafisen käyttöliittymän vastaparina. Aivan kuin "normi ikkunanäkymässä" komentokehotteella liikutaan kansiosta toiseen, luodaan, muokataan ja poistetaan tiedostoja. Toisaalta komentokehotetta voidaan ajaa myös edellä mainitussa "normi ikkunanäkymässä" jotenka ajatus puhtaasta vastineesta graafiselle käyttöliittymälle ei ole kuitenkaan täysin pitävä. Atarin, Commodore 64:n, tai MS-DOS:n aikakausina eläneille komentokehotteen mieltäminen tavaksi käytellä konetta on varsin selvä. Mutta tänä päivänä suuri osa käyttäjistä ei ole koskaan käyttänyt tietokonetta kuin graafisen käyttölliittymän kautta. Senpä tähden yleisimpien komentojen oppimisen lisäksi onkin tärkeää ymmärtää myös mikä komentokehote oikeastaan on ja mistä se tulee.

Käyttäjän päätyessä komentokehotteen äärelle esiin tulee tekstipohjainen käyttöliittymä ([Text-based user interface, TUI](https://en.wikipedia.org/wiki/Text-based_user_interface)), jossa käyttäjä pääsee syöttämään tietoa yhdelle komentokehotteen riville. Tätä riviä ennen tarjottava tieto printtaa edellisiä komentoja, rivin alussa näytetään yleensä ensin koneen nimi, sekä järjestelmään kirjautunut käyttäjä, joita UNIXiin pohjaavissa komentokehotteissa seuraa $-merkki, joka kielii käyttäjälle siitä, että komentokehote on valmis ottamaan vastaan käyttäjän syöttämiä käskyjä. Ja kuten aiemmin tuli jo mainittua näillä käskyillä sitten pystytään käyttelemään tietokonetta. Seuraavana listaa omista yleisimmin käytössä olevista kommennoista ja niiden käyttötarkoituksista.\[/vc\_column\_text\]\[vc\_column\_text\]

### Tiedostojen muokkaaminen ja muu päivittäinen työskentely komentokehotteella

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1511434624511{padding-top: 32px !important;padding-bottom: 32px !important;}"\]Tässä jälkimmäisessä postauksessa keskityn päivittäisessä työskentelyssä itselle hyödyllisiksi osoittautuneisiin komentokehotekomentoihin.\[/vc\_column\_text\]\[vc\_column\_text\]

#### mkdir

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513425044207{padding-top: 16px !important;padding-bottom: 32px !important;}"\]Mkdir komennolla luodaan kansioita. Liittämällä mukaan lisäkkeen -m voidaan luotavalle kansiolle myös määrittää oletuksista poikkeava käyttöoikeus.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424560378{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

ls

mkdir testikansio1

ls -l

total 0

drwxr-xr-x 2 markkanen staff 68 23 Mar 12:59 testikansio1

mkdir -m 640 testikansio2

ls -l

total 0

drwxr-xr-x 2 markkanen staff 68 23 Mar 12:59 testikansio1

drw-r----- 2 markkanen staff 68 23 Mar 12:59 testikansio2

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424580508{padding-top: 27px !important;}"\]

#### touch

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513425050260{padding-top: 16px !important;padding-bottom: 32px !important;}"\]Touch on helpon suorasukainen tapa luoda tiedostoja. Allekirjoittaneella touch on päivittäisessä käytössä esim. protoillessa jolloin parilla komennolla voi helposti saada luotua kansion ja tarvittavat tiedostot ja avattua ne tekstieditoriin suoraan komentokehotteelta. Näin kansiorakenne ja tiedostot "oikeassa muodossaan" (.html .css) ovat jo olemassa, eikä niitä tarvitse yksitelleen lähtä vaikkapa Sublimesta nimellä tallentelemaan.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424648207{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

ls

touch index.html

ls

index.html

touch style.css

ls

index.html style.css

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424658022{padding-top: 27px !important;}"\]

#### cp

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513425057418{padding-top: 16px !important;padding-bottom: 32px !important;}"\]Cp (copy) on tapa kopioida tiedostoja ja kansioita. Kopioitaessa tiedostoja kansion sisällä voidaan antaa komento cp tiedosto1 tiedosto2 jolloin kansioon luodaan dublikaatti nimellä tiedosto2. Toisaalta tiedoston voi myös kopioida mihin tahansa muualle kansiorakenteeseen komennolla cp tiedoto1 /uusi/tiedosto/polku/tiedosto2. Kansioita kopioidessa käytetään liitettä -r (recursive) cp -r kansio1 kansio2\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424728823{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

ls

testi2 tiedosto1

cp tiedosto1 tiedosto2

ls

testi2 tiedosto1 tiedosto2

ls testi2/

cp tiedosto1 testi2/

ls testi2/

tiedosto1

mkdir testi3

cp -r testi2/ testi3/

ls testi3/

tiedosto1

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424771632{padding-top: 27px !important;}"\]

#### mv

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513425064205{padding-top: 16px !important;padding-bottom: 32px !important;}"\]Mv (move) on komento tiedostojen ja kansioiden liikutteluun ja uudelleen nimeämiseen kansiorakenteessa. mv tiedosto1 /uusi/tiedoston/kansio siirtää kyseisen tiedoston kansiosta toiseen kun taas mv tiedosto1 tiedosto2 uudelleen nimeää tässä tapauksessa tiedosto1:en uudelleen tiedosto2:ksi.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424839757{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

ls

test2 tiedosto1

mv tiedosto1 tiedosto2

ls

test2 tiedosto2

mkdir test3

mv -f /Users/markkanen/testi/test2/ /Users/markkanen/testi/test3/

ls test3/

test2

ls

test3 tiedosto2

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424848421{padding-top: 27px !important;}"\]

#### rm

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513425072426{padding-top: 16px !important;padding-bottom: 32px !important;}"\]Rm (remove) on varmastikin monella tapaa yksi komentokehotteen voimakkaimmista komennoista. Rm:lla (ainakin sudottamalla) voi hyvinkin yksinkertaisesti pienellä määrällä komentoja poistaa tietokoneelta tiedostoja ja kansioita ilman, että komentokehote erikseen varoittaa käyttäjää mahdollisista ajettavan komennon aiheuttavista ongelmista saati, että komento varmistaisi käyttäjältä (Microsoft maailman omaisesti) kuin idiootilta "haluatko nyt ihan oikeasti tehdä noin niinkuin äsken sanoit haluavasi". Yksi Unixin kauneuksista onkin, että komentokehotteella ajettavat komennot ei juurikaan yritä olla käyttäjäänsä fiksumpi, vaan toteuttaa tasan sitä mitä komentoja sille syötetään. Kun asiat toimivat mitään erityistä ylimääräistä indikaattoria komennon läpi menemisestä ei ruudulle tulostu. Ajettavat komennot "vain menevät läpi". Vasta kun komento tai sen logiikka sattuisi olemaan väärä huomautetaan käyttäjää ystävällisesti asiasta ja tarjotaan mahdollisesti jonkinlaista vinkkiä miten komento voisi oikeasti mennä, tai mistä käyttäjä voi lähteä hakemaan aiheesta lisätietoa.

Tämän sanottuani ei asiaa voi olla alleviivaamatta tarpeeksi: osaamattomissa (tai tahallaan käytellen osaavissa käsissä) rm (eritoten yhdistettynä sudo:n kanssa) on yksi niistä komentokehotteen komennoista, jolla voi hyvin yksinkertaisesti poistaa vaikkapa tietokoneen toimimisen kannalta kriittisiä tiedostoja ilman, että käyttäjää etukäteen mitenkään muistutetaan. Niinpä ainakin itsellä on rm:n kanssa muodostunut varsin sisäsyntyinen "disclaimer" pysähtyä hetkeksi ennen komennon ajamista ja lukea läpi mitäs tässä nyt ollaan oikein tekemässä. Näin sitä on vuosien varrella säästynyt monelta harmilta. Rm ei komentona ole mitenkään muita edellä esitettyjä komentoja pelottavampi. Se on vain pirullisen tehokas omassa sarjassaan.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424903591{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

ls

test2 tiedosto1

rm tiedosto1

ls

test2

rm -r test2/

ls

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424910920{padding-top: 27px !important;}"\]

#### sudo

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513425078862{padding-top: 16px !important;padding-bottom: 32px !important;}"\]Sudo:a (Super user) käytetään komentojen suorittamiseen muilla kuin käyttäjän olemassa olevilla oikeuksilla, yleensä järjestelmän pääkäyttäjänä. Sudon käyttö liittyy siis käytännössä käyttäjätileihin määrättyjen oikeuksien varmistamiseen. On olemassa paljon tilanteita, joissa päivittäisessä käytössä käyttäjätilien oikeuksien rajaaminen on mielekästä ja toisaalta tilanteita joissa päivittäistä käyttöä ei olisi missään nimessä mielekäsät hoitaa pääkäyttäjän oikeuksin. Siitähän lopulta käyttäjätilien oikeuksien rajaamisessa on kysymys. Tämän pohjalta Sudo näyttelee roolia kätevänä siltana kurottaa tiettyjen tehtävien kohdalla tarvittavat käyttöoikeudet käyttöön. Ohjelmia asentaessa tai paketinhallintaa päivittäessä varmistetaan käyttäjän oikeudet nopeasti vaatimalla Sudo komennon etuliitteeksi ja käyttäjä tunnistetaan määritetyllä salasanalla. Valtakunnassa kaikki hyvin ja matka jatkuu.

En keksinyt tähän mitään nasevaa esimerkkiä äkkihätään Mäkin terminaalissa jotenka päätin ottaa ssh:n yli yhteyden Ubuntulla pyörivään virtuaalipalvelimeen ja demosin paketinhallinnan päivittämisen sudolla ja ilman.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424985124{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

apt-get update

Reading package lists... Done

W: chmod 0700 of directory /var/lib/apt/lists/partial failed - SetupAPTPartialDirectory (1: Operation not

permitted)

E: Could not open lock file /var/lib/apt/lists/lock - open (13: Permission denied)

E: Unable to lock directory /var/lib/apt/lists/

W: Problem unlinking the file /var/cache/apt/pkgcache.bin - RemoveCaches (13: Permission denied)

W: Problem unlinking the file /var/cache/apt/srcpkgcache.bin - RemoveCaches (13: Permission denied)

sudo apt-get update

\[sudo\] password for markkanen:

Get:1 http://url.url url-url url \[102 kB\]

Get:1 http://url.url url-url url \[46.0 kB\]

Get:1 http://url.url url-url url \[183 kB\]

Fetched 1,854 kB in 1s (951 kB/s)

Reading package lists... Done

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513424997476{padding-top: 27px !important;}"\]

#### ctrl + c, exit,  quit, clear / ctrl + k

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513425178225{padding-top: 16px !important;}"\]Edellä mainittu rypäs ei itsessän näyttele suurta roolia toiminnallisuudellaan vaan paremminkin niiden lopettamisella. Ctrl + c, exit ja quit ovat monessa tapauksessa komentoja joilla ajettava komento lopetetaan ja päästään takaisin lähtötilanteeseen komentokehotteelle. Clear ja ctrl + k pyyhkivät aiemman tulosteen pois käyttäjän silmistä jättäen jälkeensä "puhtaan" terminaalin. Clear tulostaa eteen tyhjän näkymän, mutta jättää käyttäjälle pelivaraksi aiemman tulosteen mihin pääsee käsiksi scrollaamalla ylöspäin kun taas ctrl + k poistaa nämä aiemmat tulosteet käyttäjän näkyvistä.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513425174084{padding-top: 32px !important;}"\]Tässäpä komentokehotteen komentoja koskevan postauksen jälkimmäinen osa. Vielä ennen joulua ajattelin tarinoida johonkin väliin Javan Spring Frameworkistä ja siitä mitä kyseistä aiheesta on tullut syksyn aikana opittua.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513425296243{padding-top: 16px !important;}"\]_Tämä blogipostaus liittyy Haaga-Helian tietojenkäsittelyn [opintoihini](http://www.haaga-helia.fi/fi/koulutus/ammattikorkeakoulututkinnot/tietojenkasittelyn-koulutus-tradenomi-amk) ja ennen kaikkea yleiseen nörtteilyyn, josta toivon joku kaunis päivä tulevaisuudessa repivän vielä elantoni._\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513425300867{padding-bottom: 48px !important;}"\]

_Edit 16.12.2017: Paranneltu esimerkkikoodien ulkoasua._

\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]
