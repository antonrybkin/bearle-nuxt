<template>
  <v-layout
    row>
    <v-flex
      xs12
      md8>
      <v-stepper
        v-model="e6"
        vertical>

        <!-- STEP 1 -->
        <v-stepper-step
          :complete="e6 > 1"
          step="1">
          Step 1
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-container
            fluid
            grid-list-lg>
            <v-layout
              wrap>
              <v-flex
                xs12
                sm6
                d-flex>
                <template slot="label">
                  Category
                </template>
                <v-select
                  v-model="category"
                  :items="categories"
                  :hint="`${category}`"
                  item-text="category"
                  label="Category" />
              </v-flex>
              <v-flex
                xs12
                sm6
                d-flex>
                <v-select
                  v-model="theme"
                  :items="themes"
                  :hint="`${theme}`"
                  item-text="theme"
                  label="Theme"/>
              </v-flex>
              <v-btn
                color="secondary"
                class="ml-2"
                @click="e6 = 2">Continue</v-btn>
            </v-layout>
          </v-container>
        </v-stepper-content>

        <!-- STEP 2 -->
        <v-stepper-step
          :complete="e6 > 2"
          step="2">Step 2</v-stepper-step>
        <v-stepper-content step="2">
          <v-container
            fluid
            grid-list-xl>
            <v-checkbox
              :label="`I have a technical task*`"
              v-model="IHaveTT" />
            <label v-if="IHaveTT">
              <files />
            </label>
            <p>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque dignissimos dolore eius esse expedita facilis illum ipsa magni minima, nostrum odit perferendis quae quam recusandae reiciendis sequi, tempore totam!</p>
            <v-btn
              v-if="!IHaveTT"
              color="secondary"
              @click="e6 = 3">Skip</v-btn>
            <v-btn
              v-if="IHaveTT"
              color="secondary"
              @click="e6 = 3">Continue</v-btn>
            <v-btn
              color="secondary"
              @click="e6 = 1">Back</v-btn>
          </v-container>
        </v-stepper-content>

        <!-- STEP 3 -->
        <v-stepper-step
          :complete="e6 > 3"
          step="3">Step 3</v-stepper-step>
        <v-stepper-content
          step="3"
          mr-0>
          <v-container
            fluid
            grid-list-xl>
            <div>Technology used</div>
            <no-ssr>
              <transfer
                v-model="value2"
                :filter-method="filterMethod"
                :data="data2"
                filterable
                filter-placeholder="Search"/>
            </no-ssr>
            <v-btn
              color="secondary"
              @click="e6 = 4">Continue</v-btn>
            <v-btn
              color="secondary"
              @click="e6 = 2">Back</v-btn>
          </v-container>
        </v-stepper-content>

        <!-- STEP 4 -->
        <v-stepper-step
          :complete="e6 > 4"
          step="4">Step 4</v-stepper-step>
        <v-stepper-content step="4">
          <v-container
            fluid
            grid-list-xl>
            <v-layout
              wrap>
              <v-flex
                xs12
                sm6
                d-flex>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu"
                  :nudge-right="40"
                  :return-value.sync="date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px">
                  <v-text-field
                    slot="activator"
                    v-model="date"
                    label="Timelines"
                    prepend-icon="event"
                    readonly />
                  <v-date-picker
                    v-model="date"
                    no-title
                    scrollable>
                    <v-spacer />
                    <v-btn
                      flat
                      color="secondary"
                      @click="menu = false">Cancel</v-btn>
                    <v-btn
                      flat
                      color="secondary"
                      @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
            <v-btn
              color="secondary"
              @click="e6 = 5">Continue</v-btn>
            <v-btn
              color="secondary"
              @click="e6 = 3">Back</v-btn>
          </v-container>
        </v-stepper-content>

        <!-- STEP 5 -->
        <v-stepper-step step="5">Step 5</v-stepper-step>
        <v-stepper-content step="5">
          <v-container
            fluid
            grid-list-xl>
            <v-layout
              wrap>
              <v-flex
                xs12
                sm6>
                <v-text-field
                  mask="+#(###) ###-##-##"
                  label="Phone"
                  placeholder="+X(XXX) XXX-XX-XX"
                  mb-5/>
                <div class="vertical-spacer"/>
                <v-text-field
                  label="E-mail"
                  placeholder="example@example.com"/>
              </v-flex>
              <v-flex
                xs12
                sm6>
                <v-textarea
                  name="input-7-4"
                  label="Your Comments"
                  placeholder="Lorem ipsum…"
                  counter="200"/>
              </v-flex>
            </v-layout>
            <v-btn
              color="secondary"
              @click="e6 = 1">
              <router-link to="/">send request</router-link>
            </v-btn>
            <v-btn
              color="secondary"
              @click="e6 = 4">Back</v-btn>
          </v-container>
        </v-stepper-content>
      </v-stepper>
    </v-flex>
    <v-flex
      xs12
      md4
      hidden-sm-and-down>
      <right-block/>
    </v-flex>
  </v-layout>
</template>

<script>
import Files from '../components/calculator/Files.vue'
import RightBlock from '../components/calculator/RightBlock.vue'
import { TheMask } from 'vue-the-mask'
import { Transfer } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)

export default {
  components: {
    Files,
    RightBlock,
    TheMask,
    Transfer,
    lang,
    locale
  },
  data() {
    const generateData2 = _ => {
      const data = []
      const states = [
        '#react',
        '#vue',
        '#blockchain',
        '#python',
        '#jango',
        '#sketch',
        '#react',
        '#vue',
        '#blockchain',
        '#python',
        '#jango',
        '#sketch'
      ]
      states.forEach((technology, index) => {
        data.push({
          label: technology,
          key: index,
          initial: states[index]
        })
      })
      return data
    }
    return {
      e6: 1,
      IHaveTT: false,
      category: 'Website',
      theme: 'Casino',
      categories: ['Website', 'Mobile app', 'Fizz', 'Buzz'],
      themes: ['Casino', 'Bar', 'Fizz', 'Buzz'],
      data2: generateData2(),
      value2: [0, 1, 2, 3, 4, 5],
      filterMethod(query, item) {
        return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1
      },
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    }
  }
}
</script>

<style lang="scss">
.v-stepper {
  padding-top: 112px;
  box-shadow: none;
  font-family: FuturaBookC;
  font-size: 20px;
  color: #5a5a5a;
  letter-spacing: 2.08px;
  .v-btn {
    margin-left: 0;
  }
  input,
  textarea,
  select,
  .v-input {
    font-family: FuturaBookC;
    font-size: 20px;
    color: #5a5a5a;
    letter-spacing: 2.08px;
  }
}
.v-stepper--vertical .v-stepper__step {
  letter-spacing: 0;
}
.v-stepper--vertical .v-stepper__content {
  padding: 16px 40px 16px 10px;
}
.v-input--selection-controls {
  margin-top: 0;
}
.v-stepper__label {
  font-family: FuturaBookC;
  font-size: 48px;
  color: #5a5a5a;
  letter-spacing: 5px;
}
.hidden-file {
  position: static;
}
.el-transfer {
  min-width: 640px;
  .el-transfer-panel {
    border-radius: 0;
    border: 1px solid #979797;
    width: 250px;
    height: 432px;
    margin: 15px 0;
  }
  .el-transfer-panel__header,
  .el-transfer-panel__item .el-checkbox__input {
    display: none;
  }
  .el-transfer-panel__filter .el-input__inner {
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid #5a5a5a;
    padding-left: 40px;
    font-size: 20px;
    color: #5a5a5a;
    letter-spacing: 2.08px;
    text-align: left;
  }
  div:nth-child(3) .el-transfer-panel__filter {
    input,
    span {
      display: none;
    }
  }
  .el-transfer__buttons {
    padding: 10px;
  }
  .el-transfer__button {
    background: #47494f;
    border-color: #a0a0a0;
    will-change: box-shadow;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    height: 36px;
    color: #5a5a5a;
    &:hover {
      background: #616161;
      border-color: #a0a0a0;
    }
  }
  .el-transfer__button.is-disabled,
  .el-transfer__button.is-disabled:hover {
    background: white;
  }
  .el-transfer__button:not(.is-disabled) {
    color: white;
  }
  .el-transfer-panel__list.is-filterable {
    padding: 0 10px;
    height: auto;
  }
  .el-transfer-panel__item.el-checkbox {
    display: inline-block;
    border: 1px solid #5a5a5a;
    margin: 5px;
    padding: 0;
    height: auto;
    .el-checkbox__label {
      padding: 0 15px;
      font-size: 14px;
      color: #5a5a5a;
      letter-spacing: 1.46px;
    }
    &.is-checked {
      background: #5a5a5a;
      .el-checkbox__label {
        color: white;
      }
    }
  }
}
.v-textarea textarea {
  border: 1px solid #5a5a5a;
  padding: 20px;
}
.v-label.v-label--active.theme--light {
  font-size: 20px;
  position: relative;
  margin-top: -36px;
}
.v-btn__content a {
  color: #ffffff;
  text-decoration: none;
}
.vertical-spacer {
  visibility: hidden;
  height: 31px;
}
@media only screen and (min-width: 601px) {
  .v-stepper {
    padding: 150px 0 30px 60px;
  }
  .v-stepper--vertical .v-stepper__step__step,
  .v-stepper--vertical > .v-stepper__content {
    margin-right: 34px;
  }
  .v-stepper--vertical .v-stepper__content {
    padding-right: 1px;
    padding-left: 23px;
    margin-right: 0;
  }
}
@media only screen and (max-width: 600px) {
  .v-stepper__step__step {
    display: none;
  }
  .v-stepper--vertical {
    .v-stepper__content {
      display: none;
      margin-left: 0;
    }
    .v-stepper__step--active {
      padding-top: 0;
      & + .v-stepper__content {
        display: block;
      }
    }
  }
  .theme--light.v-stepper--vertical .v-stepper__content:not(:last-child) {
    border: 0;
  }
  .v-stepper__step:not(.v-stepper__step--active) {
    display: none;
  }
  .el-transfer .el-transfer-panel {
    height: 250px;
  }
  .el-transfer .el-transfer__buttons {
    display: block;
    .el-transfer__button {
      display: inline-block;
      transform: rotate(90deg);
      margin-left: 8%;
    }
  }
}
</style>
