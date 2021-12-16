const barFilled = $(".bar-filled");
const discount = $(".yearly span");
const inputSection = $(".range-input");
const pageview = $(".pageview");
const price = $(".price span");
const rangeInput = $("input");
const slider = $(".slider");
const toggle = $("#billing-button button");

const pageviewList = ["10k", "50k", "100k", "500k", "1m"];
const priceList = [8, 12, 16, 24, 36];

function ChangeRangeInput() {
    const rangeValue = parseFloat(rangeInput.val());
    const inputWidth = parseFloat(inputSection.css("width"));
    const sliderPosition = ((rangeValue * inputWidth) * 25 / 100 - parseFloat(slider.css("width")) * rangeValue / 4) + "px";
    pageview.text(pageviewList[rangeValue] + " pageviews");
    if (toggle.hasClass("active")) {
        price.text("$" + (parseFloat(priceList[rangeValue]) * 3 / 4).toFixed(2));
    }
    else {
        price.text("$" + parseFloat(priceList[rangeValue]).toFixed(2)); // Get 2 decimal numbers
    }
    slider.css("left", sliderPosition);
    barFilled.css("width", sliderPosition);
}

function ChangeDiscountText() {
    if ($(window).width() <= 375) {
        discount.text("-25%");
    }
    else {
        discount.text("25% discount");
    }
}

ChangeRangeInput();
ChangeDiscountText();

$(window).resize(function() {
    ChangeRangeInput();
    ChangeDiscountText();
});

rangeInput.on("input", ChangeRangeInput);

toggle.click(function() {
    toggle.toggleClass("active");
    ChangeRangeInput();
});