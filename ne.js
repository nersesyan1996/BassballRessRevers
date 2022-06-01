let a = prompt("sdaewfdsfa");


let n = a.replace("(","")
// console.log(n)
let b = n.replace(")","")
// console.log(b)


let c = b.replace(",",":")
// console.log(c)
let d = c.replace(",",":")
// console.log(d)
let e = d.replace(",",":")
// console.log(e)
let f = e.replace(",",":")
// console.log(f)



let dataArr = f.split(":")
console.log(dataArr)
// (24:31,18:19,10:26,14:19,51:10)

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
