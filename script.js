let a = prompt("sdaewfdsfa");

let n = a.replace("(","")

let b = n.replace(")","")



let c = b.replace(",",":")

let d = c.replace(",",":")

let e = d.replace(",",":")

let f = e.replace(",",":")



let dataArr = f.split(":")

let erkarutyun = dataArr.length
let res

switch (erkarutyun) {
  case 10:
    document.write("(",dataArr[1],":",dataArr[0],",",dataArr[3],":",dataArr[2],",",dataArr[5],":",dataArr[4],",",dataArr[7],":",dataArr[6],",",dataArr[9],":",dataArr[8],")");
    res = parseInt(dataArr[1])+parseInt(dataArr[3])
    document.write(res)
    break;
    case 8:
    document.write("(",dataArr[1],":",dataArr[0],",",dataArr[3],":",dataArr[2],",",dataArr[5],":",dataArr[4],",",dataArr[7],":",dataArr[6],")");
    break;
  case 6:
    document.write("(",dataArr[1],":",dataArr[0],",",dataArr[3],":",dataArr[2],",",dataArr[5],":",dataArr[4],")");
    break;
  case 4:
    document.write("(",dataArr[1],":",dataArr[0],",",dataArr[3],":",dataArr[2],")");
    break;
    case 2:
      document.write("(",dataArr[1],":",dataArr[0],")");
    break;
  default:
    alert( "SXAL" );
}
