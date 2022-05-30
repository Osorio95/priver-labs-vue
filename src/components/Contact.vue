<template>
    <div class="lg:col-start-1 lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-4">
        <h6 class="lg:col-start-1 lg:col-span-full text-3xl">
            ¿Quieres conocer más?
        </h6>
        <h2 class="lg:col-start-1 lg:col-span-full text-6xl font-bold my-4">
            Contáctanos
        </h2>
        <div class="lg:col-start-2 lg:col-span-full text-xl mb-12">
            <p>
                Priver Lab te brinda la solución creativa adaptada a tus necesidades.
                <br>
                <br>
                Puedes enviarnos un email a nuestra dirección <a
                    class="text-Secondary hover:text-TertiaryB transition-all"
                    href="mailto:grupo@priver.app">grupo@priver.app</a> o llenar el formulario disponible en el
                siguiente enlace.
            </p>
        </div>
    </div>

    <form @submit.prevent="onCreatePost" v-if="showForm"
        class="lg:col-start-7 lg:col-span-6 lg:grid flex flex-col lg:mt-auto mt-6 text-2xl">
        <input v-model="formName" class="px-4 py-2 text-DarkA my-3 rounded-md" placeholder="Nombre" type="text"
            name="name" id="name">
        <input v-model="formEmail" class="px-4 py-2 text-DarkA my-3 rounded-md" placeholder="E-mail" type="email"
            name="email" id="email">
        <input v-model="formPhone" class="px-4 py-2 text-DarkA my-3 rounded-md" placeholder="Móvil" type="tel"
            name="phone" id="phone">
        <input v-model="formOrg" class="px-4 py-2 text-DarkA my-3 rounded-md" placeholder="Organización" type="text"
            name="organization" id="organization">
        <textarea v-model="formText" class="px-4 py-2 text-DarkA my-3 rounded-md" placeholder="Descripción del proyecto"
            type="text" rows="4" name="text" id="text"></textarea>
        <div class="mt-3">
            <button type="submit" class="lg:w-fit w-full px-6 py-2 text-center rounded-md bg-Secondary text-2xl">
                Envíar
            </button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            formName: '',
            formEmail: '',
            formPhone: '',
            formOrg: '',
            formText: '',
            showForm: true
        }
    },
    methods: {

        onCreatePost() {

            let errorCount = false

            let formElements = [
                this.formName,
                this.formEmail,
                this.formPhone,
                this.formOrg,
                this.formText
            ]


            function checkValue(item) {
                if (item.length < 1) {
                    console.log(`${item}, is not a valid value`)
                    errorCount = true
                }
            }

            for (let el of formElements) {
                checkValue(el)
            }

            if (!errorCount) {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                var urlencoded = new URLSearchParams();
                urlencoded.append("clientName", this.formName);
                urlencoded.append("clientEmail", this.formEmail);
                urlencoded.append("clientPhone", this.formPhone);
                urlencoded.append("clientOrganization", this.formOrg);
                urlencoded.append("clientProjectDescription", this.formText);

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    mode: 'no-cors',
                    body: urlencoded,
                    redirect: 'follow'
                };

                fetch("https://api.priver.app/lab/contact", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));

                console.log('its working')
                this.showForm = false

            } else if (errorCount) {
                console.log('PAY ATTENTION PLEASE')
            }

        }
    }
}
</script>

<style>
</style>