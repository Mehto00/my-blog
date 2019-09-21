---
title: "3x Hei Maailma"
date: "2017-10-09"
description: "Hello World on yksinkertainen testi, jolla ohjelmoija kykenee helposti varmentaan oman kehitysympäristön toimivuus."
featuredImage: ./Zebra-small.jpg
---

Hello World on yksinkertainen testi, jolla ohjelmoija kykenee helposti varmentaan oman kehitysympäristön toimivuus. Konventio termin "Hello World" käyttöstä yleistyi nopeasti tällaisten pienten varmistusten yhteydessä ohjelmoinnin merkkiteoksen \_[The C Programming Language](https://en.wikipedia.org/wiki/The_C_Programming_Language) - _julkaisun myötä vuonna 1978.

> Hei maailma -ohjelma on tietokonesovellus, joka tulostaa ruudulle sanat "Hei maailma" (engl. Hello
> world). Sen voi löytää miltei jokaisesta ohjelmointikieltä opettavasta kirjasta ja se on useimpien ohjelmoijien ensimmäinen itse tehty sovellus."

_[¹](https://fi.wikipedia.org/wiki/Hei_maailma_-ohjelma)\_

Linux palvelimet -kurssin viimeisenä tehtävänä pyydettiin kirjoitamaan ja suoritamaan “Hei maailma” kolmella eri ohjelmointikielellä sekä tietenkin tätä ennen asentamaan mahdolliset tarvittavat ympäristöt.

### Java

Aloitetaan Javasta. Varmennetaan Javan olemassa olo komennolla java -version joka tulostaa käytössä olevan javan mikäli moinen koneelta asennettuna löytyy. Tämän jälkeen luodaan ensin kansio HelloWorld jonka sisään luodaan tiedosto Main.java. Tämän jälkeen avataan tiedosto nanolla.

```bash
$ java -version 
java version "x.x.x\_x"
Java(TM) SE Runtime Environment (build x.x.x)
Java HotSpot(TM) 64-Bit Server VM (build x.x.x, mixed mode)
$ mkdir HelloWorld 
$ cd HelloWorld/ 
$ touch Main.java 
$ nano Main.java
```

Yksinkertainen ohjelma Javassa muodostuu tiedoston nimen kanssa yhtenevästä luokasta, jonka sisään kirjoitellaan vaadittu pääohjelmametodi
```Java
public static void main(String\[\] args){}
```

Tämän pääohjelman sisään kirjoitetaan koodinpätkä 
```Java
System.out.println("Hello World");
```
,joka ajettaessa tulostaa ruudulle heittomerkkien sisään kirjoitetun Hello World:in.class Main {

public static void main(String\[\] args) {

System.out.println("Hello World");

}

}

Toimiakseen javakoodi tulee vielä ennen ajamista kääntää tietokoneen ymmärtämään muotoon tavukoodiksi. Käännös hoituu komennolla javac plus käännettävä tiedosto. Komennolla ls voidaan listata kansion sisältö ja todeta, että Main.java on kääntynyt komentokehotteessa ajettavaan Main.class muotoon, joka voidaan sitten lopulta suorittaa onnistuneesti komennolla java Main. Ohjelma tulostaa komentokehotteen ruudulle "Hello World".

```Bash
$ javac Main.java $ ls Main.class Main.java $ java Main Hello World
```

### Python

Seuraavaksi on vuorossa Python. Varmennetaan Pythonin olemassa olo ja luodaan aiemmin tehtyyn HelloWorld -kansioon tiedosto helloworld.py avaamalla kyseisen niminen tiedosto nanolla.

$ python --version Python x.x.x $ nano helloworld.py \[/vc_column_text\]\[vc_column_text css=".vc_custom_1507551173940{padding-top: 32px !important;padding-bottom: 32px !important;}"\]Pythonissa komento _print('Hello World') _tulostaa ruudulle heittomerkkien sisään kirjoitetun Hello World:in.\[/vc_column_text\]\[vc_column_text css=".vc_custom_1507551182349{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}"\]print('Hello World')\[/vc_column_text\]\[vc_column_text css=".vc_custom_1507551211266{padding-top: 32px !important;padding-bottom: 32px !important;}"\]Ohjelma ajetaan komentokehotteessa komennolla \_python helloworld.py_, joka tulostaa ulos – niinpä niin – _Hello World._\[/vc_column_text\]\[vc_column_text css=".vc_custom_1507551265217{margin-bottom: 32px !important;padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}"\]\$ python helloworld.py Hello World\[/vc_column_text\]\[vc_column_text\]

### Javascript / Node.js

Viimeisenä vuorossa on Javascript. Alun perin webbiselaimiin luotu kieli on kehittynyt valtavasti alkuperäisestä käyttötarkoituksestaan löytäen tiensä mm. Node.js:n kautta webbiselaimen ulkopuolelle komentokehotteella ajettavaksi koodiksi. Nodejs:n löytyminen voidaan varmentaa komennolla node --version ja tälläkin kertaa ensin luodaan aiemmin tehtyyn HelloWorld -kansioon uusi tiedosto helloworld.js avaamalla edellä mainittu tiedosto nanolla.\[/vc_column_text\]\[vc_column_text css=".vc_custom_1507554063079{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}"\]$ node --version vx.x.x $ nano helloworld.js \[/vc_column_text\]\[vc_column_text css=".vc_custom_1507551447894{padding-top: 32px !important;padding-bottom: 32px !important;}"\]Javascriptin komento console.log*('Hello World') _tulostaa ruudulle heittomerkkien sisään kirjoitetun Hello World:in.\[/vc_column_text\]\[vc_column_text css=".vc_custom_1507551459908{padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}"\]console.log('Hello World');\[/vc_column_text\]\[vc_column_text css=".vc_custom_1507551500641{padding-top: 32px !important;padding-bottom: 32px !important;}"\]Ohjelma ajetaan Nodella komentokehotteessa komennolla \_node helloworld.js*, joka tulostaa tälläkin kertaa ulos *Hello World.*\[/vc_column_text\]\[vc_column_text css=".vc_custom_1507551508319{margin-bottom: 32px !important;padding-top: 5px !important;padding-right: 10px !important;padding-bottom: 5px !important;padding-left: 10px !important;background-color: #dbdbdb !important;}"\]\$ node helloworld.js Hello World\[/vc_column_text\]\[vc_column_text css=".vc_custom_1509026094053{padding-top: 16px !important;}"\]Siinäpä tämän tämänkertainen tehtävä blogipostauksen muodossa.\[/vc_column_text\]\[vc_column_text css=".vc_custom_1509026078706{padding-top: 48px !important;padding-bottom: 48px !important;}"\]_Tämä blogipostaus liittyy Haaga-Helian tietojenkäsittelyn opintoihini ja ennen kaikea [Linux palvelimet ict4tn021](http://terokarvinen.com/2017/aikataulu-linux-palvelimet-ict4tn021-4-ti-ja-5-to-alkusyksy-2017-5-op) -kurssiin, jonka rakenteesta, oppimistavoitteista ja aikataulusta voit lukea lisää [täältä](http://207.154.212.16/syksyn-opinnot-linux-palvelimet-ict4tn021/)._\[/vc_column_text\]\[/vc_column\]\[/vc_row\]



![Awesome image](./Zebra-small.jpg)