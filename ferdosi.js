$(".btn-active").removeClass("btn-disable");
let width = window.innerWidth;
let w = "width";
let col_1 = "10%";
$(".col-1").css(w, col_1);
let col_2 = "20%";
$(".col-2").css(w, col_2);
let col_3 = "30%";
$(".col-3").css(w, col_3);
let col_4 = "40%";
$(".col-4").css(w, col_4);
let col_5 = "50%";
$(".col-5").css(w, col_5);
let col_6 = "60%";
$(".col-6").css(w, col_6);
let col_7 = "70%";
$(".col-7").css(w, col_7);
let col_8 = "80%";
$(".col-8").css(w, col_8);
let col_9 = "90%";
$(".col-9").css(w, col_9);
let col_10 = "100%";
$(".col-10").css(w, col_10);
$(".col-10 *").css("flex-shrink", "0");
let row = "100%";
$(".row").css("width", row);
$(".col-10 *").css("flex-shrink", "0");
$(".col-10 .col").css("flex-shrink", "1");

let lg = width > 1000;
let md = width < 1000 && width > 700;
let sm = width < 700;
let lgcols = [
  $(".col-1-lg"),
  $(".col-2-lg"),
  $(".col-3-lg"),
  $(".col-4-lg"),
  $(".col-5-lg"),
  $(".col-6-lg"),
  $(".col-7-lg"),
  $(".col-8-lg"),
  $(".col-9-lg"),
  $(".col-10-lg"),
  $(".row-lg"),
];
let mdcols = [
  $(".col-1-md"),
  $(".col-2-md"),
  $(".col-3-md"),
  $(".col-4-md"),
  $(".col-5-md"),
  $(".col-6-md"),
  $(".col-7-md"),
  $(".col-8-md"),
  $(".col-9-md"),
  $(".col-10-md"),
  $(".row-md"),
];
let smcols = [
  $(".col-1-sm"),
  $(".col-2-sm"),
  $(".col-3-sm"),
  $(".col-4-sm"),
  $(".col-5-sm"),
  $(".col-6-sm"),
  $(".col-7-sm"),
  $(".col-8-sm"),
  $(".col-9-sm"),
  $(".col-10-sm"),
  $(".row-sm"),
];
if (lg) {
  mdcols.forEach((item) => {
    item.css("display", "none");
  });
  smcols.forEach((item) => {
    item.css("display", "none");
  });
  $(".col-1-lg").addClass("col-1");
  $(".col-2-lg").addClass("col-2");
  $(".col-3-lg").addClass("col-3");
  $(".col-4-lg").addClass("col-4");
  $(".col-5-lg").addClass("col-5");
  $(".col-6-lg").addClass("col-6");
  $(".col-7-lg").addClass("col-7");
  $(".col-8-lg").addClass("col-8");
  $(".col-9-lg").addClass("col-9");
  $(".col-10-lg").addClass("col-10");
  $(".row-lg").addClass("row");
}
else if (md) {
  lgcols.forEach((item) => {
    item.css("display", "none");
  });
  smcols.forEach((item) => {
    item.css("display", "none");
  });
  $(".col-1-md").addClass("col-1");
  $(".col-2-md").addClass("col-2");
  $(".col-3-md").addClass("col-3");
  $(".col-4-md").addClass("col-4");
  $(".col-5-md").addClass("col-5");
  $(".col-6-md").addClass("col-6");
  $(".col-7-md").addClass("col-7");
  $(".col-8-md").addClass("col-8");
  $(".col-9-md").addClass("col-9");
  $(".col-10-md").addClass("col-10");
  $(".row-md").addClass("row");
}
else if (sm) {
  lgcols.forEach((item) => {
    item.css("display", "none");
  });
  mdcols.forEach((item) => {
    item.css("display", "none");
  });
  $(".col-1-sm").addClass("col-1");
  $(".col-2-sm").addClass("col-2");
  $(".col-3-sm").addClass("col-3");
  $(".col-4-sm").addClass("col-4");
  $(".col-5-sm").addClass("col-5");
  $(".col-6-sm").addClass("col-6");
  $(".col-7-sm").addClass("col-7");
  $(".col-8-sm").addClass("col-8");
  $(".col-9-sm").addClass("col-9");
  $(".col-10-sm").addClass("col-10");
  $(".row-sm").addClass("row");
}
for (let i = 0; i <= 20 ; i++) {
  clsname = '.m-' + i;
  $(clsname).css('margin', i + 'rem');
}
for (let j = 0; j < 20 ; j++) {
  clsname = '.m-' + j + '-5';
  $(clsname).css('margin', j + '.5' + 'rem');
}


for (let i = 0; i <= 20 ; i++) {
  clsname = '.mt-' + i;
  $(clsname).css('margin-top', i + 'rem');
}
for (let j = 0; j < 20 ; j++) {
  clsname = '.mt-' + j + '-5';
  $(clsname).css('margin-top', j + '.5' + 'rem');
}


for (let i = 0; i <= 20 ; i++) {
  clsname = '.mb-' + i;
  $(clsname).css('margin-bottom', i + 'rem');
}
for (let j = 0; j < 20 ; j++) {
  clsname = '.mb-' + j + '-5';
  $(clsname).css('margin-bottom', j + '.5' + 'rem');
}


for (let i = 0; i <= 20 ; i++) {
  clsname = '.mr-' + i;
  $(clsname).css('margin-right', i + 'rem');
}
for (let j = 0; j < 20 ; j++) {
  clsname = '.mr-' + j + '-5';
  $(clsname).css('margin-right', j + '.5' + 'rem');
}


for (let i = 0; i <= 20 ; i++) {
  clsname = '.ml-' + i;
  $(clsname).css('margin-left', i + 'rem');
}


for (let j = 0; j < 20 ; j++) {
  clsname = '.ml-' + j + '-5';
  $(clsname).css('margin-left', j + '.5' + 'rem');
}


for (let i = 0; i <= 20 ; i++) {
  clsname = '.p-' + i;
  $(clsname).css('padding', i + 'rem');
}


for (let j = 0; j < 20 ; j++) {
  clsname = '.p-' + j + '-5';
  $(clsname).css('padding', j + '.5' + 'rem');
}


for (let i = 0; i <= 20 ; i++) {
  clsname = '.pt-' + i;
  $(clsname).css('padding-top', i + 'rem');
}
for (let j = 0; j < 20 ; j++) {
  clsname = '.pt-' + j + '-5';
  $(clsname).css('padding-top', j + '.5' + 'rem');
}


for (let i = 0; i <= 20 ; i++) {
  clsname = '.pb-' + i;
  $(clsname).css('padding-bottom', i + 'rem');
}
for (let j = 0; j < 20 ; j++) {
  clsname = '.pb-' + j + '-5';
  $(clsname).css('padding-bottom', j + '.5' + 'rem');
}


for (let i = 0; i <= 20 ; i++) {
  clsname = '.pr-' + i;
  $(clsname).css('padding-right', i + 'rem');
}
for (let j = 0; j < 20 ; j++) {
  clsname = '.pr-' + j + '-5';
  $(clsname).css('padding-right', j + '.5' + 'rem');
}


for (let i = 0; i <= 20 ; i++) {
  clsname = '.pl-' + i;
  $(clsname).css('padding-left', i + 'rem');
}
for (let j = 0; j < 20 ; j++) {
  clsname = '.pl-' + j + '-5';
  $(clsname).css('padding-left', j + '.5' + 'rem');
}


for (let i = 0; i <= 20 ; i++) {
  clsname = '.m-p-' + i;
  clsname2 = '.p-m-' + i;
  $(clsname).css('padding', i + 'rem');
  $(clsname).css('margin', i + 'rem');
  $(clsname2).css('padding', i + 'rem');
  $(clsname2).css('margin', i + 'rem');
}
for (let j = 0; j < 20 ; j++) {
  clsname = '.m-p-' + j + '-5';
  clsname2 = '.p-m-' + j + '-5';
  $(clsname).css('padding', j + '.5' + 'rem');
  $(clsname).css('margin', j + '.5' + 'rem');
  $(clsname2).css('padding', j + '.5' + 'rem');
  $(clsname2).css('margin', j + '.5' + 'rem');
}


for (let i = 0; i <= 100 ; i++) {
  clsname = '.font-size-' + i;
  $(clsname).css('font-size', i);
}
for (let j = 0; j < 100 ; j++) {
  clsname = '.font-size-' + j + '-5';
  $(clsname).css('font-sizr', j);
}