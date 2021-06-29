<template>
  <div class="container pt-10" id="about">
    <!-- about -->
    <div class="flex flex-auto md:mx-10">
      <figure
        class="
          md:flex
          hover:bg-gray-300
          border border-indigo-100
          rounded-xl
          p-8
          md:p-0
          shadow-lg
          overflow-hidden
          hover:border-transparent
          hover:shadow-xl
        "
      >
        <img
          class="
            w-32
            h-32
            mt-5
            md:w-48
            md:h-auto
            md:rounded-none
            rounded-full
            mx-auto
            md:hidden
          "
          src="../assets/name.png"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <h1 class="text-4xl font-bold uppercase">About Me</h1>
          <blockquote>
            <p class="text-lg font-semibold font-mono">
              Lulusan SMK jurusan Bisnis Daring dan Pemasaran. Ingin membawa
              pengalaman ini ke ranah IT untuk mengejar perubahan karir jangka
              panjang dalam bidang Web Development. Memiliki pengalaman
              keterampilan analitis, pemecahan masalah, mahir komputer dan bisa
              menindaklanjuti proyek dari awal hingga akhir.
            </p>
          </blockquote>
          <figcaption class="font-medium md:hidden">
            <div class="text-cyan-600">Sabilillah</div>
            <div class="text-gray-500">Front-End Developer, Indonesia</div>
          </figcaption>
        </div>
      </figure>
    </div>
    <!-- end about -->

    <!-- skill -->
    <div class="container pt-16" id="skill">
      <h1 class="text-4xl font-bold uppercase">Skill</h1>
      <div class="grid gap-4 md:grid-cols-2 mx-5 mb-5">
        <div class="container rounded-md border border-indigo-300">
          <h2 class="text-2xl font-bold">Programming Language</h2>
          <div class="mx-1 mb-1">
            <div>
              <p>JavaScript</p>
              <div
                class="w-full bg-gray-300 rounded-xl border border-indigo-300"
              >
                <div
                  class="
                    w-4/5
                    h-4
                    rounded
                    bg-gradient-to-r
                    from-yellow-300
                    to-yellow-500
                    shim-blue
                    rounded-xl
                  "
                >
                  <p class="text-sm">80%</p>
                </div>
              </div>
            </div>
            <div>
              <p>HTML</p>
              <div
                class="w-full bg-gray-300 rounded-xl border border-indigo-300"
              >
                <div
                  class="
                    h-4
                    w-11/12
                    rounded
                    bg-gradient-to-r
                    from-red-300
                    to-red-500
                    shim-blue
                    rounded-xl
                  "
                >
                  <p class="text-sm">91%</p>
                </div>
              </div>
            </div>
            <div>
              <p>CSS</p>
              <div
                class="w-full bg-gray-300 rounded-xl border border-indigo-300"
              >
                <div
                  class="
                    h-4
                    w-11/12
                    rounded
                    bg-gradient-to-r
                    from-pink-300
                    to-pink-500
                    shim-blue
                    rounded-xl
                  "
                >
                  <p class="text-sm">91%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container border border-indigo-300 rounded-md">
          <h2 class="text-2xl font-bold">Framework</h2>
          <div class="mx-1 mb-1">
            <div>
              <p>Vue Js</p>
              <div
                class="w-full bg-gray-300 rounded-xl border border-indigo-300"
              >
                <div
                  class="
                    w-2/4
                    h-4
                    rounded
                    bg-gradient-to-r
                    from-green-300
                    to-green-500
                    shim-blue
                    rounded-xl
                  "
                >
                  <p class="text-sm">50%</p>
                </div>
              </div>
            </div>
            <div>
              <p>TailwindCSS</p>
              <div
                class="w-full bg-gray-300 rounded-xl border border-indigo-300"
              >
                <div
                  class="
                    h-4
                    w-2/3
                    rounded
                    bg-gradient-to-r
                    from-blue-300
                    to-blue-500
                    shim-blue
                    rounded-xl
                  "
                >
                  <p class="text-sm">75%</p>
                </div>
              </div>
            </div>
            <div>
              <p>Bootstrap</p>
              <div
                class="w-full bg-gray-300 rounded-xl border border-indigo-300"
              >
                <div
                  class="
                    h-4
                    w-3/4
                    rounded
                    bg-gradient-to-r
                    from-purple-300
                    to-purple-500
                    shim-blue
                    rounded-xl
                  "
                >
                  <p class="text-sm">80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end skill -->

    <!-- projects -->
    <div class="container mt-5 pt-16" id="projects">
      <h2 class="text-4xl font-bold uppercase">Projects</h2>
      <div
        class="flex grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mx-5 mb-5"
      >
        <div class="container shadow-lg">
          <img
            src="../assets/img/projects/zylcom.github.io_product-landing-page.png"
            alt="Product Landing page"
            class="border-t-8 border-l-8 border-r-8 border-gray-300 rounded-lg"
          />
          <a href=""
            ><p class="mt-3 font-bold border-t-2 border-gray-500">
              Product Landing Page
            </p></a
          >
        </div>

        <div class="container shadow-lg hidden md:grid lg:hidden">
            <img
              src="../assets/img/projects/zylcom.github.io_survey-form.png"
              alt="Product Landing page"
              class="
                border-t-8 border-l-8 border-r-8 border-gray-300
                rounded-lg
              "
            />
            <a href=""
              ><p class="mt-3 font-bold border-t-2 border-gray-500">
                Survey Form
              </p></a
            >
          </div>

          <div class="container shadow-lg hidden md:grid lg:hidden">
            <img
              src="../assets/img/projects/zylcom.github.io_technical-documentation-page.png"
              alt="Product Landing page"
              class="
                border-t-8 border-l-8 border-r-8 border-gray-300
                rounded-lg
              "
            />
            <a href=""
              ><p class="mt-3 font-bold border-t-2 border-gray-500">
                Technical Documentation Page
              </p></a
            >
          </div>

        <div class="container md:hidden grid lg:grid gap-4 shadow-lg">
          <div class="container shadow-lg">
            <img
              src="../assets/img/projects/zylcom.github.io_survey-form.png"
              alt="Product Landing page"
              class="
                border-t-8 border-l-8 border-r-8 border-gray-300
                rounded-lg
              "
            />
            <a href=""
              ><p class="mt-3 font-bold border-t-2 border-gray-500">
                Survey Form
              </p></a
            >
          </div>

          <div class="container shadow-lg">
            <img
              src="../assets/img/projects/zylcom.github.io_technical-documentation-page.png"
              alt="Product Landing page"
              class="
                border-t-8 border-l-8 border-r-8 border-gray-300
                rounded-lg
              "
            />
            <a href=""
              ><p class="mt-3 font-bold border-t-2 border-gray-500">
                Technical Documentation Page
              </p></a
            >
          </div>
        </div>

        <div class="container shadow-lg lg:order-last">
          <img
            src="../assets/img/projects/zylcom.github.io_tribute-page.png"
            alt="Product Landing page"
            class="border-t-8 border-l-8 border-r-8 border-gray-300 rounded-lg"
          />
          <a href=""
            ><p class="mt-3 font-bold border-t-2 border-gray-500">
              Tribute Page
            </p></a
          >
        </div>
      </div>
    </div>
    <!-- end projects -->

<!-- contact -->
<div class="container"></div>
<!-- end contact -->

  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style></style>
