lists = [{
    name: "nature",
    list: ["nature/img_1.jpg", "nature/img_2.jpg", "nature/img_3.jpg", "nature/img_4.jpg"]
}, {
    name: "technology",
    list: ["technology/img_1.jpg", "technology/img_2.jpg", "technology/img_3.jpg", "technology/img_4.jpg"]
}, {
    name: "travel",
    list: ["travel/img_1.jpg", "travel/img_2.jpg", "travel/img_3.jpg", "travel/img_4.jpg"]
}, {
    name: "all",
    list: ["nature/img_1.jpg", "nature/img_2.jpg", "nature/img_3.jpg", "nature/img_4.jpg", "technology/img_1.jpg", "technology/img_2.jpg", "technology/img_3.jpg", "technology/img_4.jpg", "travel/img_1.jpg", "travel/img_2.jpg", "travel/img_3.jpg", "travel/img_4.jpg"]
}]

const portfolioBtns = document.querySelectorAll(".portfolio__btn")
const portfolioPictursContainer = document.querySelector(".portfolio-pictures__container")

portfolioBtns.forEach(button => {
    button.onclick = e => {
        document.querySelector(".portfolio__active").classList.remove("portfolio__active")
        button.classList.add("portfolio__active")
        let listName = button.dataset.list
        let finalitems = lists.find(list => {
            return list.name === listName
        }).list

        let finalListsForAdd = finalitems.map(item => {
            return `<div class="col-md-6 col-lg-4">
                        <div class="box shadow">
                            <img src="./assets/images/portfolio/${item}" alt="portfolio-image"
                                class="img-fluid rounded">
                            <div class="info">
                                <h4>
                                    لورم ایپسوم
                                </h4>
                                <p>
                                    لورم ایپسوم متن ساختگی
                                </p>
                            </div>
                        </div>
                    </div>`
        }).join("")

        portfolioPictursContainer.innerHTML = finalListsForAdd
    }
})