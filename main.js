function loadJson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4&&xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send();
}
loadJson("data.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	career(data.career);
	education(data.education);
	skills(data.skills);

})
var childTwo=document.querySelector(".child2");
function career(careerInfo){
var heading=document.createElement("h2");
heading.textContent="CAREER OBJECTIVE";
childTwo.appendChild(heading);
var hr=document.createElement("hr");
heading.appendChild(hr);
var careerP=document.createElement("p");
careerP.textContent=careerInfo.info;
childTwo.appendChild(careerP);
}
function education(edu){
var heading=document.createElement("h2");
heading.textContent="Educational Qualifications";
childTwo.appendChild(heading);
var table=document.createElement("table");
childTwo.appendChild(table);
table.border="1";
var tr1="<tr><td>Degree</td><td>Institute</td><td>Data</td></tr>";
var tr2="";
for(var i=0;i<edu.length;i++)
{
	tr2+="<tr><td>"+edu[i].Degree+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].Data+"</td></tr>";
}
table.innerHTML=tr1+tr2;

}
function skills(skl)
{
var heading=document.createElement("h2")	
heading.textContent="SKILLS";
childTwo.appendChild(heading);
var hr=document.createElement("hr");
heading.appendChild(hr);

for (var i = 0;i < skl.length; i++){

var titleh=document.createElement("h3");
titleh.textContent=skl[i].title;
childTwo.appendChild(titleh);
var ul=document.createElement("ul");
childTwo.appendChild(ul);
for(var j=0;j<skl[i].info.length;j++){
	var li=document.createElement("li");
	li.textContent=skl[i].info[j];
	ul.appendChild(li);
}


} 
}