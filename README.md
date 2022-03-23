

	MENO: Patrik Zelenak
	PREDMET: Zaklady klaudovych tech.
	ZADANIE: zadanie c.1

# Zaklady klaudovych tech. z.1

## Potrebny softver:

Aplikacia nevyuziva ziaden dodatocny softver (iba docker, wsl2 ...).
Vsetko je prednastavene, aplikaciu staci len spustit a vyuzivat.


## Popis:

Tato aplikacia reprezenruje jednoduchy vlajkovy kviz, ktory je mozne
"hrat" v internet. prehliadaci. Jednotlive informacie su uchovane
v postgresql databaze.



## Siete:

__mynet__ - virtualna siet, jednotlive kontjnery sa "vidia" a su 
schopne medzi sebou komunikovat.


## Zvazky:

__dbdata__ - zvazok, kt. sluzi na uchovanie dat nasej psql aj 
po zastaveni a opatovnom spusteniaplikacie.



## Kontajnery:

__postgres__ - kontainer vytvoreny z uz existujuceho obrazu postgres:10.4-alpine,
jedina vykonana modifikacia nastavenie hesla, zviazanie zvazku a namapovanie
siete + pridanie tabulky do DB (schema.sql)
 
__zadanie1-psql-node__ - kontainer vytvoreny z mnou vytvoreneho obrazu ("frontend" & "backend")
(dostupny na: https://hub.docker.com/r/alg0r1tmus/tuke_zkt ), tento obraz 
vyuziva BASE image: node:latest, teda aplikacia je postavena na zakladoch
Node.js 


## NAVOD NA SPUSTENIE:
Pre zmenu stavu a inicializaciu appky nie je potrebny robit skoro nic(az na tieto prikazy:)

```./prepare-app.sh``` -> stiahne obrazy, vytvori siet + zvazok

```./start-app.sh```  -> spustenie obrazov + nacitanie tabulky do DB

```./stop-app.sh```   -> zastavi vsetky sluzby 

```./remove-app.sh``` -> vymaze vsetko co bolo vytvorene (poupratuje za sebou)

```./chech_state.sh``` -> (povodne myslene ako check_state) pridavny script na vypis vsetkych
obrazov, kontajnerov, zvazkov a sieti (check ci som vsetko poupratoval)


> Poznamka: Appku spustame v poradi:  ```./prepare-app.sh```   -->    ```./start-app.sh```\
Poznamka: Appku zastavime a opatovne spustime v poradi: ```./stop-app.sh```   -->   ```./start-app.sh```\
 Poznamka: Appku vymazeme v poradi:  ```./stop-app.sh```   -->   ```./remove-app.sh```



## AKO SPUSTIT KVIZ?

Po spravnej inicializacii appky si mozeme kviz spustit na adrese http://localhost:5000/


