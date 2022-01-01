*** JAVASCRIPT ***

Celý JS súbor  pozostáva z niekoľkých funkcií, ktoré majú za úlohu splniť 4. časť zadania.

Funkcie su písane ES6 štýlom (arrow functions...)

** IMPORT JS **

Na importovanie JS súboru do je potrebné do HTML súbore vložiť špecialný tag.
V tomto prípade je tento tag vložený pred tagom </body> v súbore uxui.html

TAG: 

<script type="text/javascript" src="scripts/script.js"></script>


** FUNKCIE **

Úhloha 4.a)
	 "Vytvorte javascript funkciu, pomocou ktorej zmeníte veľkosť obsahu v rámci tejto sekcie „sekcia_zmena“ (veľkosť písma, obr. a podobne). Aktivácia danej funkcie musí byť vykonaná minimálne troma spôsobmi, ktoré budú popísané v rámci danej sekcie."


	 ___________________________________________________________________
	| 																	|
	| funkcie scaleUp() a backToNormal() sú v podstate navzájom opačné. |
	|																	|
	  ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞

	*OPIS scaleUp()*

		- funkcia zmení(zväčší) veľkosť textu a obr. + zmení farbu nadpisu, v sekcii "sekcia_zmena"


	*OPIS backToNormal()*

		- funkcia zmení(zmänší - dá do pôvodného stavu) veľkosť textu a obr. + zmení farbu nadpisu, v sekcii "sekcia_zmena"


	*AKTIVACIA*

		ScaleUp():

		-  kilk na "button" -> ScaleUp
		-  mouseover(prejdenie kurzorom) na obr.
		-  scroll - pri scrollnutí pod určitú hodnotu (116px) -> toto je zabezpečené funkciou onPosion() -> kt. volá funkciu ScaleUp()

			* funkcia switchBool() slúži ako vypínač/aktivátor funkcie onPosion -> táto funkcia sa vola buttonom ->scrollSwitch *

		ScaleDown():

		- kilk na "button" -> ScaleDown


Úhloha 4.b)
		"Vložte do danej sekcie element obrázok (Podľa Vášho výberu) a vytvorte javascript alebo jquery funkciu, pomocou ktorej sa v obrázku zmenia tieto vlastnosti:

		- veľkost obrázku: 2 násobná;
		- umiestnenie obrázka: centrované na stred obrazovky (pozor nie sekcie, či odstavca)."

		_____________________________________________________________________
		|																	|
		| funkcie ImgDetailed() a ImgNormal() sú v podstate navzájom opačné.|
		|																	|
	     ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞


		*OPIS ImgDetailed()*

			- funkcia zarovná obr. na stred obrazovky a zväčší ho 2-násobne

		*OPIS ImgNormal()*

			- funkcia vráti obr. do pôvodnej pozície a zmenší ho 2-násobne

		*AKTIVACIA*

			ImgDetailed():

			-  kilk na "button" -> ImgDetailed

			ImgNormal():

			- kilk na "button" -> ImgNormal


Úhloha 4.c)
		"Vytvorte js script, pomocou ktorého načítate rozličné CSS súbory pre rozlíšenie: 700px, 900px, 1300px a 1600px (CSS parametre podľa vášho výberu, no musia obsahovať minimálne 5 CCS3 vlastností!)."

		_____________________________________________________________________
		|																	|
		| funkcia checkScreenSize() zabezpečí aktiváciu rôzných css súborov,|
		| pre rôzne rozlíšenia.											 	|
		|																	|
		 ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞ ͞
		* Je nutné tieto css súbory nalinkovať v HTML súbore a dodržať názvy tried

		SYNTAX:
			<link rel="stylesheet" class="dynamic[700,900,1300,1600]" type="text/css" href="css/dynamic[700,900,1300,1600].css" disabled>


		*AKTIVACIA*

			- automatický pri zmene rozlíšenia [700,900,1300,1600]px

		*OPIS checkScreenSize()*

			- funkcia checkScreenSize() zabezpečí aktiváciu rôzných css súborov, pre rôzne rozlíšenia


		* Všetky CSS súbory sa nachádzajú v zložke css


