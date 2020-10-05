function say(team,position){
    console.log( team+ "에서" +position+"을 맡고있는" +this.name);
}
var chawon={name:" 김채원"};

var minjoo={name:" 김민주"};

say.apply(chawon,[" 아이즈원"," 귀여움"]);
say.apply(minjoo,[" 아이즈원"," 바보"]);




say.call(chawon," 아이즈원"," 미모")
say.call(minjoo," 아이즈원"," 심벌즈")