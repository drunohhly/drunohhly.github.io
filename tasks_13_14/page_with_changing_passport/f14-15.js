    function find_edit(){
    const name_node = document.getElementById("name")
    console.log(name_node.innerHTML)
    name_node.innerHTML = "Natalie"
    console.log(name_node.innerHTML)

    const surname_node = document.getElementById("surname")
    console.log(surname_node.innerHTML)
    surname_node.innerHTML = "Kashkarova"
    console.log(surname_node.innerHTML)

    const yeas_old_node = document.getElementById("years_old")
    }

    const node_for_click = document.getElementById("for_click")
    node_for_click.addEventListener("click", find_edit)