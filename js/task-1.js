const li_item = document.querySelectorAll(".item");
console.log(`Number of categories: ${li_item.length}`);

li_item.forEach(item => {
    const heading = item.querySelector("h2");
    const ul_Elements = item.querySelectorAll("li");
    console.log(`Category: ${heading.innerText}`);
    console.log(`Elements: ${ul_Elements.length}`);
});