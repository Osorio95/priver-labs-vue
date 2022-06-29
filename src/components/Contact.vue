<template>
    <div class="lg:col-start-1 lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-4">
        <h6 class="lg:col-start-1 lg:col-span-full text-3xl">
            ¿Quieres conocer más?
        </h6>
        <h2 class="lg:col-start-1 lg:col-span-full text-4xl font-bold my-4">
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
    <Transition name="slide-up" mode="out-in">
        <form @submit.prevent="onCreatePost" v-if="showForm"
            class="lg:col-start-7 lg:col-span-6 lg:grid flex flex-col lg:mt-auto mt-6 text-xl">
            <div class="grid grid-cols-2 gap-4">
                <input @input="checkName" v-model="formName" class="px-4 py-2 text-DarkA my-3 rounded-md"
                    placeholder="Nombre" type="text" :class="{ 'shadow-md shadow-Warning': showErrorA }" name="name"
                    id="name">
                <div class="relative text-DarkA my-3">
                    <select @input="checkService" v-model="formService"
                        class="w-full appearance-none px-4 py-2 text-DarkA h-full rounded-md"
                        placeholder="Regular input" :class="{ 'shadow-md shadow-Warning': showErrorE }">
                        <option value="" disabled selected hidden invalid>Selecciona el servicio</option>
                        <option value="Marketing Digital">Marketing Digital</option>
                        <option value="Desarrollo de app">Desarrollo de app</option>
                        <option value="Desarrollo web">Desarrollo web</option>
                        <option value="Diseño gráfico">Diseño gráfico</option>
                        <option value="Redes sociales">Redes sociales</option>
                        <option value="Inversionista">Invierte en Priver</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 20 20">
                            <path fill="#9747ff"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <input @input="checkEmail" v-model="formEmail" class="px-4 py-2 text-DarkA my-3 rounded-md"
                placeholder="E-mail" type="email" :class="{ 'shadow-md shadow-Warning': showErrorB }" name="email"
                id="email">
            <input @input="checkPhone" v-model="formPhone" class="px-4 py-2 text-DarkA my-3 rounded-md"
                placeholder="Móvil" type="tel" :class="{ 'shadow-md shadow-Warning': showErrorC }" name="phone"
                id="phone">
            <input @input="checkOrg" v-model="formOrg" class="px-4 py-2 text-DarkA my-3 rounded-md"
                placeholder="Organización" type="text" :class="{ 'shadow-md shadow-Warning': showErrorD }"
                name="organization" id="organization">
            <textarea @input="checkText" v-model="formText" class="px-4 py-2 text-DarkA my-3 rounded-md"
                placeholder="Descripción del proyecto" :class="{ 'shadow-md shadow-Warning': showErrorE }" type="text"
                rows="4" name="text" id="text"></textarea>
            <div class="mt-3">
                <button @click="verification" type="submit"
                    class="lg:w-fit w-full px-6 py-2 text-center rounded-md bg-Secondary text-2xl">
                    Envíar
                </button>
            </div>
        </form>
        <div v-else-if="!showForm" class="lg:col-start-7 lg:col-span-6 flex flex-col justify-center text-2xl">
            <div
                class="bg-Secondary w-full text-center rounded-lg p-6 self-center place-self-center justify-self-center self">
                <h3>
                    Estaremos en contacto contigo muy pronto.
                </h3>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    data() {
        return {
            formName: '',
            formService: '',
            formEmail: '',
            formPhone: '',
            formOrg: '',
            formText: '',
            showForm: true,
            showErrorA: false,
            showErrorB: false,
            showErrorC: false,
            showErrorD: false,
            showErrorE: false,
            showErrorF: false
        }
    },
    methods: {
        onCreatePost() {
            let errorCount = false
            let formElements = [
                this.formName,
                this.formService,
                this.formEmail,
                this.formPhone,
                this.formOrg,
                this.formText
            ]
            function checkValue(item) {
                if (item.length < 1) {
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
                urlencoded.append("clientService", this.formService);
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
                    .catch(error => console.log('error', error))
                this.showForm = false
            }
        },
        verification() {
            this.checkName()
            this.checkService()
            this.checkEmail()
            this.checkPhone()
            this.checkOrg()
            this.checkText()
        },
        checkName() {
            if (this.formName == '') {
                this.showErrorA = true
            } else if (this.formName !== '') {
                this.showErrorA = false
            }
        },
        checkService() {
            if (this.formService == '') {
                this.showErrorF = true
            } else if (this.formService !== '') {
                this.showErrorF = false
            }
        },
        checkEmail() {
            if (this.formEmail == '') {
                this.showErrorB = true
            } else if (this.formEmail !== '') {
                this.showErrorB = false
            }
        },
        checkPhone() {
            if (this.formPhone == '') {
                this.showErrorC = true
            } else if (this.formPhone !== '') {
                this.showErrorC = false
            }
        },
        checkOrg() {
            if (this.formOrg == '') {
                this.showErrorD = true
            } else if (this.formOrg !== '') {
                this.showErrorD = false
            }
        },
        checkText() {
            if (this.formText == '') {
                this.showErrorE = true
            } else if (this.formText !== '') {
                this.showErrorE = false
            }
        }
    }
}
</script>

<style>
select[value=''] {
    color: gray;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>