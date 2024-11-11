function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
    $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-detail")
    const detail =$(item).children(".about-exp-detail-item")

    $(detail).slideToggle()
    console.log($(item).children(".about-exp-detail-item"))

}