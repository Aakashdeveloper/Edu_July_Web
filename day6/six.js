///localstorage//
presistant
>need to delete manually
>once saved can be accessed in any tab

localStorage.setItem('citiid',1)
undefined
localStorage.getItem('citiid')
"1"
localStorage.removeItem('citiid')
undefined
localStorage.getItem('citiid')
null
localStorage.setItem('citiid',1)
undefined

//////
Save specific to tab
delete when tab close

sessionStorage.setItem("token","7yuhneh89u344eiu")
undefined
sessionStorage.getItem('token')
"7yuhneh89u344eiu"
sessionStorage.setItem("token","mytoke")
undefined
sessionStorage.getItem('token')
"mytoke"
sessionStorage.removeItem('token')
undefined


////
save wrt to webpage 
////////
document.cookie
"_ga=GA1.2.1583323297.1594044133; _gid=GA1.2.1207294982.1596905823; _gat_gtag_UA_131256843_1=1"
document.cookie = "token=mytoken"
"token=mytoken"
document.cookie
"_ga=GA1.2.1583323297.1594044133; _gid=GA1.2.1207294982.1596905823; _gat_gtag_UA_131256843_1=1; token=mytoken"