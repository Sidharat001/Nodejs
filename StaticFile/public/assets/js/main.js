const getFormdata = () => {
    // const form = document.querySelector('')
    const submitBtn = document.getElementById('adduser');
    var formData;
    submitBtn.onclick = () => {
        formData = new FormData(form)
    }

    console.log(formData)
    document.write(`this is form data ${formData}`)
}
getFormdata()