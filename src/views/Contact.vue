<template>
    <div class="contact">
        <div>
            <h3>Contact us</h3>
            <div class="text">Need to get in touch with us? Either fill out the form with your inquiry or use
                <strong>info@under-sunned.com </strong> you'd like to contact below.</div>
        </div>
        <div>
            <form action="">

                <label for="name">Your Full Name</label><br />
                <input type="text" name="name" id="name">
                <br />
                <label for="email">Your Email</label><br />
                <input type="text" name="email" id="email">
                <br />
                <label for="message">Your message</label><br />
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <br />
                <button>Submit</button>

            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.contact {
    width: 90vh;
    display: flex;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    color: #393939;
    align-items: center;
}
.contact div{
    max-width: 50vw;
    padding: 10px;
    text-align: center;
}
.contact h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 4vh;
}
.contact input, .contact textarea, .contact button{
    border: none;
    border-radius: 3vh;
    text-align: center;
    padding: 8px 20px;
    margin: 10px 0px;

}
.contact button {
    background-color: #8c9a78;
    text-transform: uppercase;
    color: white;
    padding: 10px 30px;
    border: 4px solid rgb(237, 239, 169);
}
.contact button:hover {
    background-color: #bac7a7;
}
.contact button:active {
    background-color: #68715a;
}
.contact input:focus,
.contact textarea:focus {
    outline: none;
}
</style>