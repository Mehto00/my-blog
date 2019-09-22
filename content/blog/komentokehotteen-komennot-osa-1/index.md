---
title: "Komentokehotteen komennot osa 1"
date: "2017-10-26"
featuredImage: ./Zebra-small.jpg
---

\[vc\_row row\_type="row" use\_row\_as\_full\_screen\_section="no" type="full\_width" angled\_section="no" text\_align="left" background\_image\_as\_pattern="without\_pattern" css\_animation=""\]\[vc\_column\]\[vc\_column\_text css=".vc\_custom\_1511437560494{padding-top: 32px !important;padding-bottom: 32px !important;}"\]Tämä teksti käsittelee komentokehoitteen komentoja, joita käytetään komentokehotteella navigoimiseen ja erillaisen informaation tulostamiseen päivittäisen työskentelyn helpottamiseksi.

Muutama viikko sitten kirjoitin siitä miten "Jokaisen mac-käyttäjän tulisi tuntea Linuxin komentokehoite" (Postauksen pääset lukemaan [täältä](http://207.154.212.16/jokaisen-mac-kayttajan-tulisi-tuntea-linuxin-komentokehote/)). Yksinkertaistava otsikko oli tarkoitettu niputtamaan yhteen ajatus, että linux distroilla "heavy lifting" tehdään yleensä komentokehotteesta. Se on helpompi, nopeampi, mukavampi ja noin 85% katu-uskottavampi tapa käytellä tietokonetta päivittäisissä tehtävissä. Ja kuten aikaisemmassa tekstissä tuli todettua, mäkissä ajettava käyttäjärjestelmä polveutuu 1970 luvun UNIX -käyttöjärjestelmään ja on näin ollen löysästi ilmaisten jonkinlainen linux distrojen serkku. Tästä seuraa se ihanuus, että mitä enemmän opit vaikkapa Ubuntulla komentokehotteessa toimivia hyviä käytäntöjä valuvat nämä opit samalla lähes yksi yhteen käytettäväksi myös maceissä.

Lähestulkoon heti jutun kirjoittamisen jälkeen huomasin kuitenkin kirjoituksessa melko karkean heikkouden. Kirjoitin komentokehotteen hallitsemisen tärkeydestä ilman, että tuli kirjoitettua riviäkään siitä miten komentokehotetta oikeastaan käytetään. Eli kirjoitetaanpa nyt sitten seuraavaksi siitä käytöstä.

_"Komentoliittymä, komentorivi eli komentokehote (engl. command line interface, CLI) on tapa järjestää ihmisen ja tietokoneen välinen kommunikointi."_ [¹](https://fi.wikipedia.org/wiki/Komentoliittym%C3%A4)

Mielestäni loistava vertaus lähestyä komentokehotteen ja sen käyttelemiseen vaadittavien komentojen tunteminen tärkeyttä asiaan vihkiytyneelle on ajatella, kuinka tärkeää puusepälle on sahan tai vasaran käytön osaaminen.\[/vc\_column\_text\]\[blockquote text="Komentokehote koodarille on kuin vasara puusepälle" show\_quote\_icon="yes"\]\[vc\_column\_text css=".vc\_custom\_1509014347473{padding-top: 32px !important;padding-bottom: 32px !important;}"\]Ajatuksen omaisesti komentokehotetta voisi lähestyä graafisen käyttöliittymän vastaparina. Aivan kuin "normi ikkunanäkymässä" komentokehotteella liikutaan kansiosta toiseen, luodaan, muokataan ja poistetaan tiedostoja. Toisaalta komentokehotetta voidaan ajaa myös edellä mainitussa "normi ikkunanäkymässä" jotenka ajatus puhtaasta vastineesta graafiselle käyttöliittymälle ei ole kuitenkaan täysin pitävä. Atarin, Commodore 64:n, tai MS-DOS:n aikakausina eläneille komentokehotteen mieltäminen tavaksi käytellä konetta on varsin selvä. Mutta tänä päivänä suuri osa käyttäjistä ei ole koskaan käyttänyt tietokonetta kuin graafisen käyttölliittymän kautta. Senpä tähden yleisimpien komentojen oppimisen lisäksi onkin tärkeää ymmärtää myös mikä komentokehote oikeastaan on ja mistä se tulee.

Käyttäjän päätyessä komentokehotteen äärelle esiin tulee tekstipohjainen käyttöliittymä ([Text-based user interface, TUI](https://en.wikipedia.org/wiki/Text-based_user_interface)), jossa käyttäjä pääsee syöttämään tietoa yhdelle komentokehotteen riville. Tätä riviä ennen tarjottava tieto printtaa edellisiä komentoja, rivin alussa näytetään yleensä ensin koneen nimi, sekä järjestelmään kirjautunut käyttäjä, joita UNIXiin pohjaavissa komentokehotteissa seuraa $-merkki, joka kielii käyttäjälle siitä, että komentokehote on valmis ottamaan vastaan käyttäjän syöttämiä käskyjä. Ja kuten aiemmin tuli jo mainittua näillä käskyillä sitten pystytään käyttelemään tietokonetta. Seuraavana listaa omista yleisimmin käytössä olevista kommennoista ja niiden käyttötarkoituksista.\[/vc\_column\_text\]\[vc\_column\_text\]

### Komentokehotteella navigointi ja sitä helpottavien tietojen tulostus

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1509013802359{padding-top: 32px !important;padding-bottom: 32px !important;}"\]Postausta kirjoittaessa huomasin, että teksti venyi venymistään lähinnä käsiteltävien asioiden määrän vuoksi mikä johtikin lopulta päätökseen, että palastelen tämän kirjoituksen lopulta kahteen eri osaan. Käsitelläänpä siis ensiksi komentokehotteella liikkumiseen sekä erilaisten käyttäjää hyödyntävien tietojen esiin tulostamiseen liittyviä komentoja.\[/vc\_column\_text\]\[vc\_column\_text\]

#### pwd

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422800655{padding-top: 16px !important;padding-bottom: 16px !important;}"\]Pwd:stä, present working directory, on muodostunut itselle majakka millä varmistuu kätevästi missä kansiossa sitä oikeastaan surfataan. Yleensä sitä on melko hyvin kartalla missä mennään ja mihin ollaan navigoimassa, mutta koska komennot ovat "ilmaisia" pwd on aina siinä käden ulottuvilla (aivan kuin ls) helpottamassa elämää komentokehotteen syövereissä.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422181753{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

pwd

/Users/lebron\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422823623{padding-top: 27px !important;}"\]

#### cd

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422831783{padding-top: 16px !important;padding-bottom: 32px !important;}"\]Cd (change directory) on tapa liikkua kansiorakenteessa komentokehotteella. Komento cd itsessään on eräänlainen oikotie, joka heittää käyttäjän suorilta omaan kotihakemistoon. Cd -komennon perään liittäessä kansiopolun pääsee navigoimaan kyseiseen polkuun, joko ilman aloittavaa kenoviivaa kyseisessä kansiossa sijaitsevaan alikansioon tai kenoviivalla aivan mihin tahansa kansioon standardissa tiedostohierarkiassa. Komento cd -  vie edelliseen kansioon mistä käyttäjä paikalle saapui ja cd .. hypäytttää käyttäjän kansiorakenteessa aina yhtä kansiota ylemmäs.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422217882{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

cd

pwd

/Users/lebron

cd Documents/

/Users/lebron/Documents

cd ..

pwd

/Users/lebron

cd -

pwd

/Users/lebron/Documents

cd /var/log/apache2

pwd

/var/log/apache2\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422838578{padding-top: 27px !important;}"\]

#### ls

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422845914{padding-top: 16px !important;padding-bottom: 32px !important;}"\]Ls (list files) on komento, joka listaa kyseisen hakemiston tiedostot ja kansiot. List on käyttökelpoinen työkalu myös kurkatessa pidemmälle kansiorakenteeseen missä vaikkapa tietty tiedosto tai kansio voisi olla (ls /var/log/apache2), tai tarkastettaessa tiedoston oikeuksia (ls -l) tai normaalisti "piilotettuja" tiedostoja (ls -a).\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422423218{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

ls

api.json app.js

ls /var/log/apache2

access\_log error\_log

lebron$ ls -l

total 16

\-rw-r--r-- 1 lebron staff 46 6 Lok 11:47 api.json

\-rw-r--r-- 1 lebron staff 1639 25 Lok 09:48 app.js

ls -a

. .. api.json app.js

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422450983{padding-top: 27px !important;}"\]

#### cat

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422854634{padding-top: 16px !important;padding-bottom: 32px !important;}"\]Cat (Concatenate) tulostaa tiedoston sisällön komentokehotteelle. Tämä on loistava keino kurkata nopeasti mitä teidosto sisältää verrattuna vaikkapa siihen, että tiedosto pitäisi ensin avata ja jälkikäteen sulkea tekstieditorissa. Tekstieditorin käyttöä vastaan puhuu myös periaate huolellisuudesta - cat komennolla et voi missään tilanteessa vahingossakaan mennä muuttamaan tiedoston sisältöä. Tekstieditorilla tämä tietenkin luonnistuu.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422529142{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

ls

api.json app.js test.txt

cat test.txt

lorem ipsum

cat /Users/lebron/testi/test2

lorem lorem

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422536459{padding-top: 27px !important;}"\]

#### less

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422902109{padding-top: 16px !important;padding-bottom: 32px !important;}"\]Less:iä (Hiuksen halkojat huom! Less ei itse asiassa ole sinänsä unix-komento vaan itsenäinen ohjelma) pystyy käyttämään cat:n tavoin tiedostojen sisältöjen tulostamiseen, mutta "komentona" se toteuttaa tämän tehtävän astetta hienovaraisemmin. Siinä missä cat pukkaa ulos koko tiedoston less palastelee tulosteen tulostuksen näytölle niin, että välilyönti tulostaa aina kerralla ikkunallisen täyteen seuraavaa sisältöä ja lähes mikä tahansa muu näppäin (poislukien välilyönti ja näppäin q) yhden rivin. Lessin olemuksesta ohjelmana kielii myös se, että komentorivillä ei lessiä ajettaessa näy koneen tai kirjautuneen käyttäjän nimeä eikä $ -merkkiä, mikä tietysti tässä tapauksessa tarkoitaa sitä, ettei kyseinen terminaali ota vastaan käyttäjän siihen kirjoittamia komentoja. Näppäin q (quit) lopettaa ohjelman ajamisen missä vaiheessa tahansa ja se on tapa lopettaa ohjelma tiedoston sisällön loputtua minkä komentokehoite kertoo viimeiselle riville printatulla (END) :llä.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422634008{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

ls

api.json app.js test.txt

less test.txt

lorem ipsum

test.txt (END)

less /Users/lebron/testi/test2

lorem lorem

/Users/mikkometso/testi/test2 (END)

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422660776{padding-top: 27px !important;}"\]

#### tail

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422862039{padding-top: 16px !important;padding-bottom: 32px !important;}"\]Aivan kuten cat ja less myös tail tulostaa tietoa sille osoitetusta tiedostosta. Mutta cat:sta ja less:stä poiketen tail tulostaa vain sille osoitetun tiedoston "hännän". Oletuksena tail tulostaa 10 viimeistä riviä, mutta tätä pääsee myös itse määrittelemään, esimerkiksi vaikkapa tilanteessa, jossa tahtoo vain sen viimeisimmän merkinnän logitiedoista (tail -1). Taililla luonnistuu myös helposti vaikkapa logitietojen jatkuvampi seuraaminen. Komennolla "tail -F tiedosto" komento "jää haistelemaan" tiedostoa tulostaen automaattisesti komentokehotteelle aina viimeisimmät tiedoston loppuun tulevat muutokset. Tätä kätevää työkalua voi helposti "demota" omalla koneellaan vaikkapa avaamalla itselleen textEdittiin tiedoston, jota lähtee sitten tail -F komennolla seuraamaan. Tiedoston tehtyjen muutosten ja tallenuksen jälkeen muutokset näkyvät myös komentorivillä. Tai tietenkin jos niikseen haluaa tail -F:fätä voi myös vaikkapa oman virtuaalipalvelimen apache serverin logeja ja katsella sinne saapuvasta liikenteestä logitietoihin tallentuvia merkintöjä. Komennon tail -F saa suljettua kuinkas muutenkaan ctrl + c komennolla.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422723939{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}" el\_class="codesnippet"\]

ls

api.json app.js test.txt

tail test.txt

lorem ipsum

tail /var/log/apache2/access\_log

::1 - - \[15/Sep/2017:13:09:08 +0300\] "GET / HTTP/1.1" 403 209

::1 - - \[15/Sep/2017:13:09:13 +0300\] "GET / HTTP/1.1" 403 209

::1 - - \[15/Sep/2017:13:09:19 +0300\] "GET / HTTP/1.1" 403 209

::1 - - \[15/Sep/2017:13:09:27 +0300\] "GET /protoilu/ HTTP/1.1" 304 -

::1 - - \[15/Sep/2017:13:10:01 +0300\] "GET / HTTP/1.1" 403 209

::1 - - \[15/Sep/2017:13:10:03 +0300\] "GET / HTTP/1.1" 403 209

::1 - - \[15/Sep/2017:13:10:17 +0300\] "HEAD / HTTP/1.1" 403 -

::1 - - \[15/Sep/2017:13:10:25 +0300\] "GET / HTTP/1.1" 403 209

::1 - - \[15/Sep/2017:13:11:02 +0300\] "GET / HTTP/1.1" 403 209

::1 - - \[15/Sep/2017:13:12:40 +0300\] "GET / HTTP/1.1" 403 209

tail -1 /var/log/apache2/access\_log

::1 - - \[15/Sep/2017:13:12:40 +0300\] "GET / HTTP/1.1" 403 209

\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513422738851{padding-top: 27px !important;}"\]Komentokehotteen komentoja koskevan postauksen ensimmäinen osa päättyy tähän. Seuraavassa postauksessa kirjoitellaan sitten tiedostojen ja kansiorakenteen muokkaamisesta komentokehotteella.\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1509025996622{padding-top: 48px !important;padding-bottom: 48px !important;}"\]_Tämä blogipostaus liittyy Haaga-Helian tietojenkäsittelyn [opintoihini](http://www.haaga-helia.fi/fi/koulutus/ammattikorkeakoulututkinnot/tietojenkasittelyn-koulutus-tradenomi-amk) ja ennen kaikkea yleiseen nörtteilyyn, josta toivon joku kaunis päivä tulevaisuudessa repivän vielä elantoni._\[/vc\_column\_text\]\[vc\_column\_text css=".vc\_custom\_1513423046608{padding-bottom: 48px !important;}"\]_Edit 23.11.2017: Terävöitetty postauksen ensimmäistä kappaletta vastaamaan paremmin mistä tekstissä on kyse._

_Edit 16.12.2017: Paranneltu esimerkkikoodien ulkoasua._\[/vc\_column\_text\]\[/vc\_column\]\[/vc\_row\]
