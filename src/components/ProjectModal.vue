<template>
    <div class="fixed top-0 bottom-0 left-0 right-0 flex justify-center z-40 bg-Primary bg-opacity-80" @click="$emit('close-modal')">
        <div class="bg-TertiaryC rounded-2xl p-10 h-fit mx-auto lg:w-1/2 w3/4 mt-20 z-50" @click.stop>
            <img src="../assets/imgs/Rectangle 8.png" alt="" />
            <div class="w-full mt-6 flex flex-row">
                <div>
                    <h6 class="text-left text-base font-bold w-1/2">Desarrollo web &
                        Diseño
                        gráfico</h6>
                    <h2 class="text-left text-5xl">NeuralKnows
                    </h2>
                    <p class="text-left text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, tenetur qui beatae
                        consequuntur voluptatem aliquid molestias, aliquam repudiandae repellendus ad ipsam perferendis!
                        Et
                        debitis corrupti velit temporibus commodi iste earum.
                    </p>
                </div>
                <div class="w-full flex justify-evenly">
                    <a class="self-center mx-auto w-fit lg:px-6 lg:py-4 px-3 py-2 h-fit text-center rounded-lg bg-White text-Secondary lg:text-3xl text-xl font-bold"
                        href="#">Ir a web</a>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
export default {
}
</script>