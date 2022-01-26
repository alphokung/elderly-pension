<template>
  <div>
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title is-size-1">
          คำนวนวันลงทะเบียน รับเบี้ยยังชีพผู้สูงอายุ
        </h1>
        <h2 class="is-size-3">อย่าให้ความไม่รู้ ทำให้ท่านพลาดสิทธิ</h2>
        <div class="mt-4">
          <div class="columns">
            <div class="column">
              <img src="~/assets/9m.webp" class="icon-menu" />
              <div class="mt-2 is-size-5 has-text-weight-semibold">
                มีผู้สูงอายุกว่า 9 ล้านคน
                <br />ที่มีสิทธิได้รับเบี้ยยังชีพผู้สูงอายุ
              </div>
            </div>
            <div class="column">
              <img src="~/assets/7200b.webp" class="icon-menu" />
              <div class="mt-2 is-size-5 has-text-weight-semibold">
                คือเงินที่คุณอาจไม่ได้รับ <br />ถ้าคุณลงทะเบียนนอกช่วงเวลา
              </div>
            </div>
            <div class="column">
              <img src="~/assets/register.webp" class="icon-menu" />
              <div class="mt-2 is-size-5 has-text-weight-semibold">
                ลงทะเบียนที่เขต หรือองค์กรปกครองส่วนท้องถิ่น
                ตามที่อยู่ในทะเบียนบ้าน
              </div>
            </div>
          </div>

          <div class="mt-4">
            <br>
            <a href="#calculate" class="button main-button has-text-white"
              >คลิกเพื่อคำนวณ ว่าควรสมัครวันไหน</a
            >
          </div>
        </div>
      </div>
    </section>

    <section id="whois" class="section has-text-white has-background-primary">
      <h1 class="title is-size-2">
        คุณสมบัติผู้มีสิทธิรับเงินเบี้ยยังชีพผู้สูงอายุ
      </h1>
      <ul>
        <li>สัญชาติไทย</li>
        <li>
          อายุ 60 ตามกฎหมาย (กรณีทะเบียนราษฎร์ระบุเฉพาะปีเกิด ถือว่าเกิด 1
          มกราคม ของปีนั้น)
        </li>
      </ul>

      <h1 class="title is-size-4 mt-6 mb-2">ผู้ไม่มีสิทธิได้รับเงิน</h1>
      <ul>
        <li>
          ผู้ที่ได้รับสวัสดิการหรือสิทธิประโยชน์อื่นใดจากหน่วยงานของรัฐ
          รัฐวิสาหกิจ หรือเทศบาล อบต.
        </li>
        <li>
          ผู้ที่ได้รับผู้รับเงินบำนาญ เบี้ยหวัด บำนาญพิเศษ
          หรือเงินอื่นในลักษณะเดียวกัน
        </li>
        <li>
          ผู้สูงอายุที่อยู่ในสถานสงเคราะห์ของรัฐ หรือองค์กรปกครองส่วนท้องถิ่น
        </li>
        <li>
          ผู้ที่ได้รับเงินเดือน ค่าตอบแทน รายได้ประจำ
          หรือผลประโยชน์ตอบแทนอย่างอื่นที่รัฐหรือเทศบาล อบต.จัดให้เป็นประจำ
          ยกเว้นผู้พิการและผู้ป่วยเอดส์ตามระเบียบ
        </li>
      </ul>
    </section>

    <section id="document" class="section">
      <div class="container has-text-centered">
        <h1 class="title is-size-1">เอกสารที่ต้องใช้</h1>
        <h2 class="is-size-4">
          เอกสารที่ต้องใช้ในการไปยื่นลงทะเบียนที่เขต
          หรือองค์กรปกครองส่วนท้องถิ่น ตามที่อยู่ในทะเบียนบ้าน
        </h2>
        <div class="mt-4">
          <div class="columns">
            <div class="column">
              <img src="~/assets/card.webp" class="icon-menu" />
              <div class=" is-size-4 has-text-weight-semibold">
                สำเนาบัตรประประชาชน<br>
                (จำนวน 1 ชุด)
              </div>
            </div>
            <div class="column">
              <img src="~/assets/house.webp" class="icon-menu" />
              <div class=" is-size-4 has-text-weight-semibold">
                สำเนาทะเบียนบ้าน<br>
                (จำนวน 1 ชุด)
              </div>
            </div>
            <div class="column">
              <img src="~/assets/bookbank.webp" class="icon-menu" />
              <div class=" is-size-4 has-text-weight-semibold">
                สำเนาสมุดบัญชีออมทรัพย์<br>
                (จำนวน 1 ชุด)
              </div>
            </div>
          </div>
          <div class="text-muted has-text-danger">
            * การยื่นแทน หรือโอนเงินเข้าบัญชีอื่น ต้องมีหนังสือมอบอำนาจตัวจริง
            พร้อมสำเนาบัตรประชาชน และทะเบียนบ้านของผู้รับมอบอำนาจอย่างละ 1 ชุด
          </div>
        </div>
      </div>
    </section>

    <section id="calculate" class="section has-background-black has-text-white">
      <h1 class="title is-size-2">คำนวณวันที่สามารถยื่นลงทะเบียนได้</h1>
      <div>กรุณาระบุวันเกิดของท่าน</div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <div class="select is-fullwidth">
              <select v-model="day">
                <option value="">กรุณาระบุวันเกิด</option>
                <option v-for="item in days" :value="item" :key="item">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="field">
            <div class="select is-fullwidth">
              <select v-model="month">
                <option value="">กรุณาระบุเดือนเกิด</option>
                <option
                  v-for="item in months"
                  :value="item.value"
                  :key="item.value"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="field">
            <div class="select is-fullwidth">
              <select v-model="year">
                <option value="">กรุณาระบุปีเกิด</option>
                <option
                  v-for="item in years"
                  :value="item.value"
                  :key="item.value"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="field">
            <button class="button has-text-white is-fullwidth" @click="search">
              คำนวน
            </button>
          </div>
        </div>
      </div>
      <hr />

      <div v-bind:class="{ 'is-hidden': !loading }">
        <div class="info__box">
          <div class="left_box">
            <p class="shinny info__text_one"></p>
            <p class="shinny info__text_two"></p>
            <p class="shinny info__text_three"></p>
          </div>
          <div class="right_box">
            <div class="shinny image"></div>
          </div>
        </div>
        <div class="info__box">
          <div class="left_box">
            <p class="shinny info__text_one"></p>
            <p class="shinny info__text_two"></p>
            <p class="shinny info__text_three"></p>
          </div>
          <div class="right_box">
            <div class="shinny image"></div>
          </div>
        </div>
        <div class="info__box">
          <div class="left_box">
            <p class="shinny info__text_one"></p>
            <p class="shinny info__text_two"></p>
            <p class="shinny info__text_three"></p>
          </div>
          <div class="right_box">
            <div class="shinny image"></div>
          </div>
        </div>
      </div>

      <div v-bind:class="{ 'is-hidden': loading }">
        <div class="mb-5 has-text-centered">
          <strong>ประมาณการเงินได้ </strong>
          <h1 class="title hero-answer" id="estimatePension">165,600 บาท</h1>
          <span class="has-text-left text-muted"
            >(ตัวเลขนี้เป็นการประมาณการ หากมีอายุถึง 80 ปี)</span
          >
        </div>

<div class="chart p-0 mb-6">
          <strong>เงินที่ได้ ในแต่ละช่วงอายุ </strong>
          <div class="skills">
            <div class="charts ">
              <div class="chart chart--dev">
                <ul class="chart--horiz">
                  <li class="chart__bar" style="width: 70%">
                    <span class="chart__label">
                       60-69 ปี รับ 600 บาท/เดือน</span
                    >
                  </li>
                  <li class="chart__bar" style="width: 80%">
                    <span class="chart__label">
                       70-79 ปี รับ 700 บาท/เดือน</span
                    >
                  </li>
                  <li class="chart__bar" style="width: 90%">
                    <span class="chart__label">
                       80-89 ปี รับ 800 บาท/เดือน</span
                    >
                  </li>
                  <li class="chart__bar" style="width: 100%">
                    <span class="chart__label">
                       90 ปีขึ้นไป รับ 1,000 บาท/เดือน</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div class="columns">
          <div class="column is-half is-full-mobile">
            <strong>วันแรกที่ลงทะเบียนได้ </strong>
            <h1 class="title answer mb-4" id="registerDate">
              {{ registerDate }}
            </h1>
            <div id="registerDateDesc" class="has-text-left text-muted">
              เพื่อไม่ให้เสียสิทธิ โปรดลงทะเบียนระหว่างวันที่<br />
              1 ตุลาคม - 30 พฤศจิกายน {{ firstPeriod }} หรือ<br />
              1 มกราคม - 30 กันยายน {{ secondPeriod }}
            </div>
          </div>

          <div class="column is-half is-full-mobile">
            <strong>รับเบี้ยยังชีพผู้สูงอายุงวดแรกวันที่ </strong><br />
            <h1 class="title answer" id="firstReceivedDate">
              {{ firstReceivedDate }}
            </h1>
            <div class="has-text-left text-muted">
              (เงินจะเข้าทุกวันที่ 10 ของเดือน)
            </div>
          </div>
        </div>

        
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered is-size-6">
        ขอบคุณสูตรการคำนวนจากคุณ <a href="https://www.youtube.com/watch?v=9BICvbFWlRI" target="_blank"
          >ทศพล เชี่ยวชาญประพันธ์
        </a>
        <br />
        <a
          class="is-underlined"
          href="https://www.youtube.com/watch?v=9BICvbFWlRI"
          target="_blank"
          >ดูวิธีการคำนวนโดยละเอียด</a
        >
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      day: 1,
      month: 5,
      year: 1963,
      firstReceivedDate: "",
      registerDate: "",
      firstPeriod: "",
      secondPeriod: "",
      loading: false,
      years: [],
      months: [
        { name: "มกราคม", value: "0" },
        { name: "กุมภาพันธ์", value: "1" },
        { name: "มีนาคม", value: "2" },
        { name: "เมษายน", value: "3" },
        { name: "พฤษภาคม", value: "4" },
        { name: "มิถุนายน", value: "5" },
        { name: "กรกฎาคม", value: "6" },
        { name: "สิงหาคม", value: "7" },
        { name: "กันยายน", value: "8" },
        { name: "ตุลาคม", value: "9" },
        { name: "พฤศจิกายน", value: "10" },
        { name: "ธันวาคม", value: "11" },
      ],
      days: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    };
  },
  created() {
    for (let i = 2565; i > 2564 - 100; i--) {
      this.years.push({ name: i, value: i - 543 });
    }
    this.search();
  },
  methods: {
    search() {
      const vm = this;

      if (vm.day === "" || vm.month === "" || vm.year === "") {
        alert("กรุณาเลือกวันเกิดก่อน");
      }

      vm.loading = true;

      setTimeout(function () {
        let date = new Date(vm.year, vm.month, vm.day);
        date.setDate(date.getDate() - 1);
        date.setFullYear(date.getFullYear() + 60);

        const firstDate = new Date(date.getFullYear(), date.getMonth(), 10);
        firstDate.setMonth(firstDate.getMonth() + 1);

        let fiscalYear = firstDate.getFullYear();
        if (firstDate.getMonth() >= 10) {
          fiscalYear++;
        }

        const registerDate = fiscalYear - 2;
        const options = { year: "numeric", month: "long", day: "numeric" };

        const y60o = fiscalYear + 543;

        vm.firstReceivedDate = firstDate.toLocaleDateString("th-TH", options);
        vm.registerDate = "1 ตุลาคม " + (registerDate + 543);
        vm.firstPeriod = `${registerDate + 543}`;
        vm.secondPeriod = `${registerDate + 543 + 1}`;
        vm.loading = false;
      }, 500);
    },
  },
  head() {
    return {
      title: "ตรวจสอบสิทธิ์สุขภาพของคุณ",
    };
  },
};
</script>
