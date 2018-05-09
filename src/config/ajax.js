export default async(url="",data={},type="",method="")=>{
    var url="",
    type=type.toUpperCase()
    if(type=="GET"){
        var lasturl="";
        Object.keys(data).forEach((item,index)=>{
            lasturl+=item+"="+data[item]+"&"
        })
        if(lasturl==""){
            lasturl=lasturl.substr(0,lasturl.lastIndexOf("&"))
            url=url+"?"+lasturl
        }
    }else{
        var 
    }
}