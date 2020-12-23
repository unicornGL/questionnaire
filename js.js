var submit = document.querySelector("#submit")
submit.onclick = () => {
    swal({
        title: "No Regrets ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((e) => {
        if (e) {
            swal("I admire your courage.", {
                icon: "success",
            })
        } else {
            swal("You may have second chance.")
        }
    })
}