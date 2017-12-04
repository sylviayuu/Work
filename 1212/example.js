

var str = 
"1,LES Renewable NG,LRN,D3,Diesel,0,0,0.6,3000,TRUE,FP1\n"+
"2,Seneca CERF,LRN,D3,Diesel,0.9,0.85,0.8,2000,TRUE,default\n"+
"3,Seneca Energy II,SE,D3,Diesel,0,0,0.6,1100,TRUE,FP1\n"+
"4,Timberline Energy,TIM,D3,Diesel,0.75,0.75,0.5,1200,FALSE,default\n"+
"5,MDU,MDU,D3,Diesel,0.8,0.8,0.8,500,TRUE,default\n"+
"6,Canton Renewables,CAN,D3,Diesel,0.825,0.825,0.75,1000,TRUE,default\n"+
"7,CERF Shelby,SHB,D3,Diesel,0.825,0.825,0.75,650,TRUE,default\n"+
"8,Complexe Enviro Connexions Ltd,CEP,D3,Diesel,0.67,0.67,0.5,5200,TRUE,default\n"+
"9,DTE ( Pinnacle),PGP,D3,Diesel,0.8,0.8,0.8,100,TRUE,default\n"+
"10,DTE (Westside),WGP,D3,Diesel,0.81,0.81,0.81,900,TRUE,default\n"+
"11,DTE (Westside),WGP,D3,Diesel,0.82,0.82,0.82,900,TRUE,default\n"+
"12,DTE (Westside),WGP,D3,Diesel,0.825,0.825,0.825,900,TRUE,default\n"+
"13,EBI Energy,EBI,D3,Diesel,0.75,0.7,0.5,100,FALSE,default\n"+
"14,Iogen D3 Biofuel Partners,IOG,D3,Diesel,0.9,0.86,0.25,1932,FALSE,default\n"+
"15,King County,KCWT,D3,Diesel,0.7,0.7,0.35,700,FALSE,default\n"+
"16,GSF Energy,GSF,D3,Diesel,0.75,0.75,0.5,3532,TRUE,default\n"+
"17,Monroeville LFG,MRV,D3,Diesel,0.75,0.75,0.5,900,TRUE,default\n"+
"18,Puget Sound Energy,PSE,D3,Diesel,0.73,0.73,0.35,4947,TRUE,default\n"+
"19,Renewable Dairy Fuels,RDF,D3,Diesel,0.85,0.85,0.915,500,TRUE,default\n"+
"20,Renewable Pwr Prod,RPP,D3,Diesel,0.875,0.8,0.8,1000,FALSE,default\n"+
"21,River Birch,RB,D3,Diesel,0.85,0.85,0.25,3200,TRUE,default\n"+
"22,Shell (DCEMB),DCEMB,D3,Diesel,0.93,0.88,0.8,2000,FALSE,default\n"+
"23,Shell (DCEMB),DCEMB,D3,Diesel,0.93,0.88,0.8,3000,TRUE,default\n"+
"24,Shell (ETR),ETR,D3,Diesel,0.9,0.85,0.7,930,TRUE,default\n"+
"25,Shell (FSC),FSC,D3,Diesel,0.9,0.85,0.7,1400,TRUE,default\n"+
"26,Shell (JDP),JDP,D3,Diesel,0.9,0.85,0.7,1000,TRUE,default\n"+
"27,LES Renewable NG,LRN,D3,Diesel,0,0,0.75,3000,TRUE,FP1\n"+
"28,LES Renewable NG,LRN,D3,Diesel,0.825,0.825,0.75,3000,TRUE,default\n"+
"29,Seneca Energy II,SE,D3,Diesel,0,0,0.75,1100,TRUE,FP1";

csv = Papa.parse(str, {
    complete: function(results) {
        console.log(results);
    }
});

var DataSet = csv.data;

$(document).ready(function() {
    $('#example').DataTable( {
        data: DataSet,
        columns: [
            { title: "" },
            { title: "Name" },
            { title: "ShortName" },
            { title: "Product" },
            { title: "Fuel" },
            { title: "RINs" },
            { title: "RINs_CA" },
            { title: "LCFS" },
            { title: "Vol" },
            { title: "CA" },
            { title: "PricingFunction" }
        ]
    } );
} );