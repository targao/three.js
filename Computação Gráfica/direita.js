var triangleGeometry = new THREE.Geometry();

//contorno
triangleGeometry.vertices.push(new THREE.Vector3(0.0, 0.0, 0.0));//0
triangleGeometry.vertices.push(new THREE.Vector3(-4.3, 1.3, 0.0));//1
triangleGeometry.vertices.push(new THREE.Vector3(-3.8, 1.7, 0.0));//2
triangleGeometry.vertices.push(new THREE.Vector3(-7.3, 3.7, 0.0));//3
triangleGeometry.vertices.push(new THREE.Vector3(-8.36, 6.0, 0.0));//4
triangleGeometry.vertices.push(new THREE.Vector3(-10.1, 5.7, 0.0));//5
triangleGeometry.vertices.push(new THREE.Vector3(-11.15, 8.59, 0.0));//6
triangleGeometry.vertices.push(new THREE.Vector3(-12.6, 7.7, 0.0));//7
triangleGeometry.vertices.push(new THREE.Vector3(-15.24, 12.5, 0.0));//8
triangleGeometry.vertices.push(new THREE.Vector3(-14.5, 9.24, 0.0));//9
triangleGeometry.vertices.push(new THREE.Vector3(-16.26, 10.9, 0.0));//10
triangleGeometry.vertices.push(new THREE.Vector3(-18.6, 19.14, 0.0));//11
triangleGeometry.vertices.push(new THREE.Vector3(-18.3, 14.04, 0.0));//12
triangleGeometry.vertices.push(new THREE.Vector3(-19.1, 16.8, 0.0));//13
triangleGeometry.vertices.push(new THREE.Vector3(-20.9, 21.9, 0.0));//14
triangleGeometry.vertices.push(new THREE.Vector3(-19.3, 25.68, 0.0));//15
triangleGeometry.vertices.push(new THREE.Vector3(-22.1, 24.9, 0.0));//16
triangleGeometry.vertices.push(new THREE.Vector3(-20.5, 31.3, 0.0));//17
triangleGeometry.vertices.push(new THREE.Vector3(-18.2, 29.7, 0.0));//18
triangleGeometry.vertices.push(new THREE.Vector3(-16.3, 33.1, 0.0));//19
triangleGeometry.vertices.push(new THREE.Vector3(-16.34, 37.7, 0.0));//20
triangleGeometry.vertices.push(new THREE.Vector3(-13.6, 35.4, 0.0));//21
triangleGeometry.vertices.push(new THREE.Vector3(-8.3, 37.58, 0.0));//22
triangleGeometry.vertices.push(new THREE.Vector3(-10.7, 41.54, 0.0));//23
triangleGeometry.vertices.push(new THREE.Vector3(-4.51, 42.54, 0.0));//24
triangleGeometry.vertices.push(new THREE.Vector3(-4.31, 37.54, 0.0));//25
triangleGeometry.vertices.push(new THREE.Vector3(0.0, 34.02, 0.0));//26
triangleGeometry.vertices.push(new THREE.Vector3(0.0, 42.6, 0.0));//27

triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));//0
triangleGeometry.faces.push(new THREE.Face3(1, 2, 3));//1
triangleGeometry.faces.push(new THREE.Face3(2, 3, 4));//2
triangleGeometry.faces.push(new THREE.Face3(3, 4, 5));//3
triangleGeometry.faces.push(new THREE.Face3(6, 4, 5));//4
triangleGeometry.faces.push(new THREE.Face3(6, 7, 5));//5
triangleGeometry.faces.push(new THREE.Face3(6, 7, 8));//6
triangleGeometry.faces.push(new THREE.Face3(9, 7, 8));//7
triangleGeometry.faces.push(new THREE.Face3(9, 10, 8));//8
triangleGeometry.faces.push(new THREE.Face3(8, 10, 11));//9
triangleGeometry.faces.push(new THREE.Face3(12, 10, 11));//10
triangleGeometry.faces.push(new THREE.Face3(12, 13, 11));//11
triangleGeometry.faces.push(new THREE.Face3(11, 13, 14));//12
triangleGeometry.faces.push(new THREE.Face3(15, 11, 14));//13
triangleGeometry.faces.push(new THREE.Face3(15, 16, 14));//14
triangleGeometry.faces.push(new THREE.Face3(15, 16, 17));//15
triangleGeometry.faces.push(new THREE.Face3(18, 15, 17));//16
triangleGeometry.faces.push(new THREE.Face3(18, 19, 17));//17
triangleGeometry.faces.push(new THREE.Face3(21, 19, 20));//18
triangleGeometry.faces.push(new THREE.Face3(17, 19, 20));//19
triangleGeometry.faces.push(new THREE.Face3(22, 21, 20));//20
triangleGeometry.faces.push(new THREE.Face3(22, 23, 20));//21
triangleGeometry.faces.push(new THREE.Face3(22, 23, 24));//22
triangleGeometry.faces.push(new THREE.Face3(22, 25, 24));//23
triangleGeometry.faces.push(new THREE.Face3(26, 25, 24));//24
triangleGeometry.faces.push(new THREE.Face3(26, 27, 24));//25

//dentro
triangleGeometry.vertices.push(new THREE.Vector3(0.0, 1.5, 0.0));//28
triangleGeometry.vertices.push(new THREE.Vector3(-1.8, 6.0, 0.0));//29
triangleGeometry.vertices.push(new THREE.Vector3(0.0, 11.67, 0.0));//30
triangleGeometry.vertices.push(new THREE.Vector3(-3.5, 9.9, 0.0));//31
triangleGeometry.vertices.push(new THREE.Vector3(-6.1, 3.8, 0.0));//32
triangleGeometry.vertices.push(new THREE.Vector3(-4.75, 19.8, 0.0));//33
triangleGeometry.vertices.push(new THREE.Vector3(-2.1, 10.63, 0.0));//34
triangleGeometry.vertices.push(new THREE.Vector3(-3.9, 15.2, 0.0));//35
triangleGeometry.vertices.push(new THREE.Vector3(-5.3, 10.2, 0.0));//36
triangleGeometry.vertices.push(new THREE.Vector3(-6.25, 13.2, 0.0));//37
triangleGeometry.vertices.push(new THREE.Vector3(-4.3, 11.5, 0.0));//38
triangleGeometry.vertices.push(new THREE.Vector3(-7.1, 6.0, 0.0));//39
triangleGeometry.vertices.push(new THREE.Vector3(-3.7, 12.3, 0.0));//40
triangleGeometry.vertices.push(new THREE.Vector3(-5.0, 12.9, 0.0));//41
triangleGeometry.vertices.push(new THREE.Vector3(-4.7, 14.1, 0.0));//42
triangleGeometry.vertices.push(new THREE.Vector3(-4.6, 17.0, 0.0));//43
triangleGeometry.vertices.push(new THREE.Vector3(-5.5, 19.0, 0.0));//44
triangleGeometry.vertices.push(new THREE.Vector3(-5.7, 16.8, 0.0));//45
triangleGeometry.vertices.push(new THREE.Vector3(-5.9, 14.8, 0.0));//46
triangleGeometry.vertices.push(new THREE.Vector3(-9.2, 14.6, 0.0));//47
triangleGeometry.vertices.push(new THREE.Vector3(-13.0, 10.3, 0.0));//48
triangleGeometry.vertices.push(new THREE.Vector3(-12.1, 16.3, 0.0));//49
triangleGeometry.vertices.push(new THREE.Vector3(-16.3, 18.68, 0.0));//50
triangleGeometry.vertices.push(new THREE.Vector3(-17.5, 16.94, 0.0));//51
triangleGeometry.vertices.push(new THREE.Vector3(-10.6, 21.33, 0.0));//52
triangleGeometry.vertices.push(new THREE.Vector3(-16.25, 22.63, 0.0));//53
triangleGeometry.vertices.push(new THREE.Vector3(-12.0, 24.43, 0.0));//54
triangleGeometry.vertices.push(new THREE.Vector3(-16.14, 26.9, 0.0));//55
triangleGeometry.vertices.push(new THREE.Vector3(-11.5, 26.2, 0.0));//56
triangleGeometry.vertices.push(new THREE.Vector3(-10.1, 26.9, 0.0));//57
triangleGeometry.vertices.push(new THREE.Vector3(-9.2, 27.6, 0.0));//58
triangleGeometry.vertices.push(new THREE.Vector3(-3.7, 23.3, 0.0));//59
triangleGeometry.vertices.push(new THREE.Vector3(-12.8, 35.8, 0.0));//60
triangleGeometry.vertices.push(new THREE.Vector3(-5.6, 22.1, 0.0));//61
triangleGeometry.vertices.push(new THREE.Vector3(-6.6, 20.6, 0.0));//62
triangleGeometry.vertices.push(new THREE.Vector3(-6.6, 20.0, 0.0));//63

triangleGeometry.faces.push(new THREE.Face3(0, 28,29));//26
triangleGeometry.faces.push(new THREE.Face3(30, 28, 31));//27
triangleGeometry.faces.push(new THREE.Face3(0, 29, 32));//28
triangleGeometry.faces.push(new THREE.Face3(0, 2, 32));//29
triangleGeometry.faces.push(new THREE.Face3(30, 34, 33));//30
triangleGeometry.faces.push(new THREE.Face3(31, 34, 35));//31
triangleGeometry.faces.push(new THREE.Face3(26, 30, 25));//32
triangleGeometry.faces.push(new THREE.Face3(4, 32, 29));//33
triangleGeometry.faces.push(new THREE.Face3(36, 31, 29));//34
triangleGeometry.faces.push(new THREE.Face3(36, 31, 37));//35
triangleGeometry.faces.push(new THREE.Face3(37, 38, 31));//36
triangleGeometry.faces.push(new THREE.Face3(36, 39, 29));//37
triangleGeometry.faces.push(new THREE.Face3(36, 39, 37));//38
triangleGeometry.faces.push(new THREE.Face3(37, 39, 4));//39
triangleGeometry.faces.push(new THREE.Face3(38, 31, 40));//40
triangleGeometry.faces.push(new THREE.Face3(38, 41, 40));//41
triangleGeometry.faces.push(new THREE.Face3(42, 41, 40));//42
triangleGeometry.faces.push(new THREE.Face3(42, 35, 40));//43
triangleGeometry.faces.push(new THREE.Face3(42, 35, 43));//44
triangleGeometry.faces.push(new THREE.Face3(42, 44, 43));//45
triangleGeometry.faces.push(new THREE.Face3(42, 45, 44));//46
triangleGeometry.faces.push(new THREE.Face3(42, 45, 46));//47 
triangleGeometry.faces.push(new THREE.Face3(41, 42, 46));//48 
triangleGeometry.faces.push(new THREE.Face3(38, 46, 37));//49
triangleGeometry.faces.push(new THREE.Face3(37, 4, 47));//50
triangleGeometry.faces.push(new THREE.Face3(48, 4, 47));//51
triangleGeometry.faces.push(new THREE.Face3(48, 49, 47));//52
triangleGeometry.faces.push(new THREE.Face3(48, 49, 8));//53
triangleGeometry.faces.push(new THREE.Face3(50, 49, 8));//54 
triangleGeometry.faces.push(new THREE.Face3(50, 51, 8));//55 
triangleGeometry.faces.push(new THREE.Face3(50, 51, 11));//56 
triangleGeometry.faces.push(new THREE.Face3(50, 49, 52));//57 
triangleGeometry.faces.push(new THREE.Face3(50, 53, 52));//58 
triangleGeometry.faces.push(new THREE.Face3(54, 53, 52));//59 
triangleGeometry.faces.push(new THREE.Face3(54, 53, 55));//60 
triangleGeometry.faces.push(new THREE.Face3(54, 56, 55));//61 
triangleGeometry.faces.push(new THREE.Face3(54, 56, 55));//62
triangleGeometry.faces.push(new THREE.Face3(18, 56, 55));//63 
triangleGeometry.faces.push(new THREE.Face3(18, 56, 19));//64 
triangleGeometry.faces.push(new THREE.Face3(57, 56, 19));//65 
triangleGeometry.faces.push(new THREE.Face3(57, 58, 19));//66 
triangleGeometry.faces.push(new THREE.Face3(21, 59, 19));//67 
triangleGeometry.faces.push(new THREE.Face3(21, 59, 60));//68 
triangleGeometry.faces.push(new THREE.Face3(61, 33, 59));//69 
triangleGeometry.faces.push(new THREE.Face3(62, 52, 49));//70
triangleGeometry.faces.push(new THREE.Face3(62, 63, 49));//71
triangleGeometry.faces.push(new THREE.Face3(47, 63, 49));//72
triangleGeometry.faces.push(new THREE.Face3(37, 63, 47));//73
triangleGeometry.faces.push(new THREE.Face3(37, 62, 44));//74
triangleGeometry.faces.push(new THREE.Face3(55, 18, 15));//75
triangleGeometry.faces.push(new THREE.Face3(53, 55, 15));//76
triangleGeometry.faces.push(new THREE.Face3(53, 11, 15));//77
triangleGeometry.faces.push(new THREE.Face3(53, 11, 50));//78
triangleGeometry.faces.push(new THREE.Face3(22, 59, 60));//79
triangleGeometry.faces.push(new THREE.Face3(59, 33, 30));//80
triangleGeometry.faces.push(new THREE.Face3(25, 22, 30));//81
triangleGeometry.faces.push(new THREE.Face3(59, 33, 30));//82

triangleGeometry.faces[0].color.setHex("0x2A1919");
triangleGeometry.faces[1].color.setHex("0x51391D");
triangleGeometry.faces[2].color.setHex("0x91744A");
triangleGeometry.faces[3].color.setHex("0x7C5931");
triangleGeometry.faces[4].color.setHex("0x8A6933");
triangleGeometry.faces[5].color.setHex("0xC99959");
triangleGeometry.faces[6].color.setHex("0x9F8747");
triangleGeometry.faces[7].color.setHex("0xA38056");
triangleGeometry.faces[8].color.setHex("0x785A27");
triangleGeometry.faces[9].color.setHex("0xA68E5E");
triangleGeometry.faces[10].color.setHex("0x9E7E57");
triangleGeometry.faces[11].color.setHex("0xE2C88F");
triangleGeometry.faces[12].color.setHex("0xB58753");
triangleGeometry.faces[13].color.setHex("0xAB926A");
triangleGeometry.faces[14].color.setHex("0xB29A52");
triangleGeometry.faces[15].color.setHex("0xBA9453");
triangleGeometry.faces[16].color.setHex("0xBB954E");
triangleGeometry.faces[17].color.setHex("0xA88740");
triangleGeometry.faces[18].color.setHex("0xA6813A");
triangleGeometry.faces[19].color.setHex("0xA4782F");
triangleGeometry.faces[20].color.setHex("0xD0B07F");
triangleGeometry.faces[21].color.setHex("0xBFA071");
triangleGeometry.faces[22].color.setHex("0xA29082");
triangleGeometry.faces[23].color.setHex("0x9E7E67");
triangleGeometry.faces[24].color.setHex("0xA48A6F");
triangleGeometry.faces[25].color.setHex("0x524D54");
triangleGeometry.faces[26].color.setHex("0x877753");
triangleGeometry.faces[27].color.setHex("0xD8CDC7");
triangleGeometry.faces[28].color.setHex("0x91806E");
triangleGeometry.faces[29].color.setHex("0x998F74");
triangleGeometry.faces[30].color.setHex("0xB7A493");
triangleGeometry.faces[31].color.setHex("0xB7A493");
triangleGeometry.faces[32].color.setHex("0xD0C7BE");
triangleGeometry.faces[33].color.setHex("0xD2C9CE");
triangleGeometry.faces[34].color.setHex("0x745840");
triangleGeometry.faces[35].color.setHex("0x9F8D79");
triangleGeometry.faces[36].color.setHex("0x694B33");
triangleGeometry.faces[37].color.setHex("0xC3BDBD");
triangleGeometry.faces[38].color.setHex("0xC3B9B7");
triangleGeometry.faces[39].color.setHex("0xDADBDD");
triangleGeometry.faces[40].color.setHex("0x816245");
triangleGeometry.faces[41].color.setHex("0xCE9C85");
triangleGeometry.faces[42].color.setHex("0x916A49");
triangleGeometry.faces[43].color.setHex("0xA78A7C");
triangleGeometry.faces[44].color.setHex("0xBAA89C");
triangleGeometry.faces[45].color.setHex("0xD9B5A7");
triangleGeometry.faces[46].color.setHex("0xAA7C48");
triangleGeometry.faces[47].color.setHex("0xA79193");
triangleGeometry.faces[48].color.setHex("0xAE9881");
triangleGeometry.faces[49].color.setHex("0x978E7D");
triangleGeometry.faces[50].color.setHex("0xD0D2D1");
triangleGeometry.faces[51].color.setHex("0xD0D2D1");
triangleGeometry.faces[52].color.setHex("0xCBCCD0");
triangleGeometry.faces[53].color.setHex("0xDFDDE2");
triangleGeometry.faces[54].color.setHex("0xD5D2CD");
triangleGeometry.faces[55].color.setHex("0xCECFC9");
triangleGeometry.faces[56].color.setHex("0xD2D9E1");
triangleGeometry.faces[57].color.setHex("0xAAA29F");
triangleGeometry.faces[58].color.setHex("0xB0A99F");
triangleGeometry.faces[59].color.setHex("0x7A6240");
triangleGeometry.faces[60].color.setHex("0x89714F");
triangleGeometry.faces[61].color.setHex("0x89714F");
triangleGeometry.faces[62].color.setHex("0x553E1F");
triangleGeometry.faces[63].color.setHex("0xCFC7C4");
triangleGeometry.faces[64].color.setHex("0xC4BBB2");
triangleGeometry.faces[65].color.setHex("0xADADA3");
triangleGeometry.faces[66].color.setHex("0xB9B6AD");
triangleGeometry.faces[67].color.setHex("0xC7C5C6");
triangleGeometry.faces[68].color.setHex("0xAAABA5");
triangleGeometry.faces[69].color.setHex("0xB89B71");
triangleGeometry.faces[70].color.setHex("0x998568");
triangleGeometry.faces[71].color.setHex("0x59513A");
triangleGeometry.faces[72].color.setHex("0xDADCDA");
triangleGeometry.faces[73].color.setHex("0xA89484");
triangleGeometry.faces[74].color.setHex("0x755332");
triangleGeometry.faces[75].color.setHex("0xCFD0C8");
triangleGeometry.faces[76].color.setHex("0xDED9D8");
triangleGeometry.faces[77].color.setHex("0xDFDEDC");
triangleGeometry.faces[78].color.setHex("0xD9D9E1");
triangleGeometry.faces[79].color.setHex("0xD6D2D1");
triangleGeometry.faces[80].color.setHex("0xD6D2D1");
triangleGeometry.faces[81].color.setHex("0xD6D2D1");
triangleGeometry.faces[82].color.setHex("0xD6D2D1");