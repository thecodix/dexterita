<template>
  <main id="app" class="content">
    <div v-if="!chosenQuiz">
    <nav class="nav">
      <menu class="nav__controls">
        <icon class="nav__icon" use="#filter"></icon>

        <li v-for="(active, menu) in menus" class="nav__label"
            v-bind:key="active"
            :class="{
            'nav__label--active' : active,
            'nav__label--filter': activeFilters[menu].length
          }" @click="setMenu(menu, active)">
          {{ menu }}
        </li>

        <li class="nav__label nav__label--clear" @click="clearAllFilters">Borrar filtros</li>
      </menu>

      <label class="nav__label" @click="modal = !modal">Autor</label>
    </nav>

    <transition-group name="dropdown" tag="section" class="dropdown" :style="dropdown">
      <menu v-for="(options, filter) in filters" class="filters"
            v-show="menus[filter]" ref="menu" :key="filter">

        <li v-if="filter === 'convocatoria'" class="filters__convocatoria">
          <output>
            <label>Desde el año:&nbsp;</label>
            20{{ filters.convocatoria }}
          </output>

          <input v-model="filters.convocatoria" class="filters__range" type="range"
                 :min="convocatoria.min" :max="convocatoria.max" step="1"/>
        </li>

        <template v-else>
          <li v-for="(active, option) in options" class="filters__item"
              v-bind:key="active"
              :class="{ 'filters__item--active': active }"
              @click="setFilter(filter, option)">
            {{ option }}
          </li>
        </template>
      </menu>
    </transition-group>

    <transition-group name="company" tag="ul" class="content__list">
      <li class="company"
          v-for="company in list"
          @click="chooseSubject(company.subject, company.year, company.month)"
          :key="company.id">
        <div class="company__info">
          <icon class="company__logo" :style="`fill:${company.color}`" :use="company.logo"></icon>
          <h2 class="company__name">{{ company.name }}</h2>
          <blockquote class="company__slogan">{{ company.slogan }}</blockquote>
        </div>

        <ul class="company__details">
          <li class="company__data">
            <label class="company__label">Curso</label>
            <p class="company__subject">
              {{ company.course_dg }}º
            </p>
          </li>

          <li class="company__data">
            <label class="company__label">{{ company.minutes }}:00 minutos</label>
            <p class="company__rating">{{ company.questions }} Preguntas</p>
          </li>
        </ul>
      </li>
    </transition-group>

    <transition name="modal">
      <section v-if="modal" class="modal" @click="modal = false">
        <article class="modal__content" @click.stop>
          <h4 class="modal__title">Alfredo Romeu</h4>

<!--          <h5 class="modal__link" @click="modal = false">-->
<!--            <a href="https://snipcart.com/blog/vuejs-transitions-animations" target="_blank">-->
<!--              Con un poco de inspiración de aquí-->
<!--            </a>-->
<!--          </h5>-->

          <button class="modal__close" @click="modal = false">&times;</button>
        </article>
      </section>
    </transition>
    </div>

    <div v-if="chosenQuiz">
      <nav class="nav">
        <menu class="nav__controls">
          <icon class="nav__icon" use="#filter"></icon>

          <li class="nav__label">
            {{ title }}
          </li>
        </menu>

        <label class="nav__label" @click="restart()">Volver</label>
      </nav>

      <!--container-->
      <transition name="main_transition">
        <section class="container">

        <!--questionBox-->

          <div class="questionBox">

          <!-- transition -->
          <transition :duration="{ enter: 500, leave: 300 }"
                      enter-active-class="animated zoomIn"
                      leave-active-class="animated zoomOut"
                      mode="out-in">

            <!--chooseQuiz-->
            <div v-if="!chosenQuiz"
                 v-bind:key="questionIndex"
                 class="questionContainer">

              <header>
                <h2 class="title is-6">Elige asignatura</h2>
              </header>

              <!--options-->
              <div class="optionContainer">
                <b-form-group id="input-group-4">
                  <b-button-group vertical v-model="form.buttons4" id="buttons4" size="sm">
                    <b-button
                      id="but-social"
                      variant="primary"
                      class="button actionButton"
                      v-on:click="chooseSubject(social)">
                      Psicología Social
                    </b-button>
                    <b-button
                      id="but-emocion"
                      variant="primary"
                      class="button actionButton"
                      v-on:click="chooseSubject(emocion)">
                      Psicología de la Emoción
                    </b-button>
                    <b-button
                      id="but-atencion"
                      variant="primary"
                      class="button actionButton"
                      v-on:click="chooseSubject(atencion)">
                      Psicología de la Atención
                    </b-button>
                  </b-button-group>
                </b-form-group>
              </div>
              <!--/options-->

            </div>
            <!--/chooseQuiz-->

            <!--qusetionContainer-->
            <div class="questionContainer"
                 v-if="chosenQuiz && questionIndex<quiz.questions.length"
                 v-bind:key="questionIndex">

              <header>
                <h1 class="title is-6">{{title}}</h1>
                <h4>Tests examen 2020</h4>
                <!--progress-->
                <div class="progressContainer">
                  <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar"
                         v-bind:style="{ width: (corrects/quiz.questions.length)*100 + '%' }"
                         aria-valuemin="0" aria-valuemax="100">{{corrects}}</div>
                    <div class="progress-bar bg-danger" role="progressbar"
                         v-bind:style="{ width: (incorrects/quiz.questions.length)*100 + '%' }"
                         aria-valuemin="0" aria-valuemax="100">{{incorrects}}</div>
                  </div>
                  <p>{{questionIndex+1}} de {{quiz.questions.length}} preguntas</p>
                  <p>Tiempo restante: {{timeLeft}}</p>
                </div>
                <!--/progress-->
              </header>

              <!-- questionTitle -->
              <p class="titleContainer title">{{ quiz.questions[questionIndex].text }}</p>
              <div class="titleDate"
                   v-if="quiz.questions[questionIndex].fecha">
                {{ quiz.questions[questionIndex].fecha.mes }} -
                {{ quiz.questions[questionIndex].fecha.year }}
              </div>

              <!-- quizOptions -->
              <div class="optionContainer">
                <div class="option"
                     v-for="(response, index)
                          in quiz.questions[questionIndex].responses"
                     @click="selectOption(index, response)"
                     :class="{ 'is-correct':
                              userResponses[questionIndex] == index
                              && response.correct,
                              'is-wrong':
                              userResponses[questionIndex] == index
                              && !response.correct}"
                     :key="index">
                  {{ index | charIndex }}. {{ response.text }}
                </div>
              </div>

              <!--quizFooter: navigation and progress-->
              <footer class="questionFooter">

                <!--pagination-->
                <nav class="pagination" role="navigation" aria-label="pagination">

                  <!-- back button -->
                  <a class="button actionButton"
                     v-on:click="prev()"
                     :disabled="questionIndex < 1">
                    Anterior
                  </a>

                  <!-- next button -->
                  <a class="button actionButton" v-on:click="next()"
                     :disabled="questionIndex===quiz.questions.length">
                    {{ (userResponses[questionIndex]==null)?'Saltar pregunta':'Siguiente' }}
                  </a>

                </nav>
                <!--/pagination-->

              </footer>
              <!--/quizFooter-->

            </div>
            <!--/questionContainer-->

            <!--quizCompletedResult-->
            <div v-if="chosenQuiz && questionIndex === quiz.questions.length"
                 v-bind:key="questionIndex"
                 class="quizCompleted has-text-centered">

              <!-- quizCompletedIcon: Achievement Icon -->
              <span class="icon">
                <i class="fa"
                   :class="score()>3
                   ?'fa-check-circle-o is-active':'fa-times-circle'">
                </i>
              </span>

              <!--resultTitleBlock-->
              <h2 class="title">
                ¡Buen trabajo!
              </h2>
              <div class="progressContainer">

                <div class="progress">
                  <div class="progress-bar bg-success" role="progressbar"
                       v-bind:style="{ width: (corrects/quiz.questions.length)*100 + '%' }"
                       aria-valuemin="0" aria-valuemax="100">{{corrects}}</div>
                  <div class="progress-bar bg-danger" role="progressbar"
                       v-bind:style="{ width: (incorrects/quiz.questions.length)*100 + '%' }"
                       aria-valuemin="0" aria-valuemax="100">{{incorrects}}</div>
                </div>
              </div>
              <p class="subtitle">
                Puntuación total: {{ score() }} / 10
              </p>
              <br>
              <a class="button" @click="restart()">Volver a empezar
                <i class="fa fa-refresh"></i>
              </a>
              <!--/resultTitleBlock-->

            </div>
            <!--/quizCompetedResult-->

          </transition>

        </div>
        <!--/questionBox-->

        </section>
      </transition>
      <!--/container-->
    </div>
  </main>
</template>
<script>
import _ from 'lodash';
import { BButton } from 'bootstrap-vue/esm/components/button';
import { BFormGroup } from 'bootstrap-vue/esm/components/form-group';
import { BButtonGroup } from 'bootstrap-vue/esm/components/button-group';
import MOCK_DATA from './mock-data.json';
import ATE_JUN_20 from './json/atencion/atencion_jun_20.json';
import EM_JUN_20 from './json/emocion/emocion_jun_20.json';
import EM_SEP_19 from './json/emocion/emocion_sep_19.json';
import SOC_JUN_20 from './json/social/social_jun_20.json';
import SOC_SIM_20 from './json/social/social_simulacro2p_20.json';

const EXAMENES_ATENCION = [ATE_JUN_20];
const EXAMENES_EMOCION = [EM_JUN_20, EM_SEP_19];
const EXAMENES_SOCIAL = [SOC_JUN_20, SOC_SIM_20];
const EXAMS = {
  atencion: {
    20: {
      june: ATE_JUN_20,
    },
  },
  emocion: {
    20: {
      june: EM_JUN_20,
    },
    19: {
      september: EM_SEP_19,
    },
  },
  social: {
    20: {
      june: SOC_JUN_20,
    },
  },
};
const numQuestions = 2;

export default {
  components: {
    BButton,
    BButtonGroup,
    BFormGroup,
    icon: { template: '<svg><use :xlink:href="use"/></svg>', props: ['use'] },
  },

  data() {
    return {
      chosenSubject: false,
      modal: false,
      companies: [],
      dropdown: { height: 0 },
      convocatoria: { min: 20, max: 0 },
      filters: {
        primero: {}, segundo: {}, convocatoria: 0,
      },
      menus: {
        primero: false, segundo: false, convocatoria: false,
      },
      chosenQuiz: false,
      corrects: 0,
      incorrects: 0,
      quiz: {
        user: 'Dave',
        questions: {},
      },
      social: {
        title: 'Psicología Social',
        examNames: EXAMENES_SOCIAL,
        numQuestions: 20,
        time: 40 * 60, // in seconds
        plusScore: 0.45,
        minusScore: 0.20,
      },
      emocion: {
        title: 'P. de la Emoción',
        examNames: EXAMENES_EMOCION,
        numQuestions: 40,
        time: 20 * 60, // in seconds
        plusScore: 0.25,
        minusScore: 0.25,
      },
      atencion: {
        title: 'P. de la Atención',
        examNames: EXAMENES_ATENCION,
        numQuestions: 20,
        time: 30 * 60, // in seconds
        plusScore: 0.5,
        minusScore: 0.25,
      },
      questionIndex: 0,
      userResponses: Array(numQuestions).fill(null),
      rightWrong: Array(numQuestions).fill(null),
      isActive: false,
      form: {
        selected: '',
      },
      myToggle: false,
      result: '',
      show: false,
      time: 50 * 60, // in seconds
      timer: null,
    };
  },
  filters: {
    charIndex(i) {
      return String.fromCharCode(97 + i);
    },
  },
  computed: {
    activeMenu() {
      return Object.keys(this.menus).reduce(($$, set, i) => ((this.menus[set]) ? i : $$), -1);
    },

    list() {
      const { segundo, primero } = this.activeFilters;

      const c = this.companies.filter(({
        subject, rating,
      }) => {
        if (rating < this.filters.convocatoria) return false;
        // eslint-disable-next-line no-bitwise
        if (segundo.length && !~segundo.indexOf(subject)) return false;
        // eslint-disable-next-line no-bitwise
        if (primero.length && !~primero.indexOf(subject)) return false;
        // eslint-disable-next-line no-bitwise
        // return !categories.length || categories.every((cat) => ~keywords.indexOf(cat));´
        return true;
      });
      // eslint-disable-next-line no-undef
      return _.orderBy(c, '-year');
    },

    activeFilters() {
      const { segundo, primero } = this.filters;

      return {
        segundo: Object.keys(segundo).filter((c) => segundo[c]),
        // categories: Object.keys(categories).filter((c) => categories[c]),
        primero: Object.keys(primero).filter((c) => primero[c]),
        convocatoria: (this.filters.convocatoria > this.convocatoria.min)
          ? [this.filters.convocatoria]
          : [],
      };
    },
    timeLeft() {
      return `${this.minutes}:${this.seconds}`;
    },
    minutes() {
      return String(Math.floor(this.time / 60)).padStart(2, '0');
    },
    seconds() {
      return String(this.time % 60).padStart(2, '0');
    },
  },

  watch: {
    activeMenu(index, from) {
      if (index === from) return;

      this.$nextTick(() => {
        if (!this.$refs.menu || !this.$refs.menu[index]) {
          this.dropdown.height = 0;
        } else {
          this.dropdown.height = `${this.$refs.menu[index].clientHeight + 16}px`;
        }
      });
    },
  },

  methods: {
    setFilter(filter, option) {
      if (filter === 'segundo') {
        if (!this.filters[filter][option]) {
          this.filters.primero = {
            social: false,
            atencion: false,
            emocion: false,
          };
        }
        this.filters[filter][option] = !this.filters[filter][option];
      } else if (filter === 'primero') {
        if (!this.filters[filter][option]) {
          this.filters.segundo = {
            aprendizaje: false,
          };
        }
        this.filters[filter][option] = !this.filters[filter][option];
      } else {
        setTimeout(() => {
          this.clearFilter(filter, option, this.filters[filter][option]);
        }, 100);
      }
    },

    clearFilter(filter, except, active) {
      if (filter === 'convocatoria') {
        this.filters[filter] = this.convocatoria.min;
      } else {
        Object.keys(this.filters[filter]).forEach((option) => {
          this.filters[filter][option] = except === option && !active;
        });
      }
    },

    clearAllFilters() {
      Object.keys(this.filters).forEach(this.clearFilter);
    },

    setMenu(menu, active) {
      Object.keys(this.menus).forEach((tab) => {
        this.menus[tab] = !active && tab === menu;
      });
    },

    restart() {
      this.clearAllFilters();
      this.questionIndex = 0;
      this.corrects = 0;
      this.incorrects = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
      this.time = 50 * 60;
      this.chosenQuiz = false;
    },
    chooseSubject(subject, year, month) {
      this.title = this[subject].title;
      // const exams = this[subject].examNames[0].concat(this[subject].examNames[1]);
      const exams = EXAMS[subject][year][month];
      this.quiz.questions = exams
        .sort(() => Math.random() - 0.5)
        .slice(0, this[subject].numQuestions);
      this.userResponses = Array(this[subject].numQuestions).fill(null);
      this.rightWrong = Array(this[subject].numQuestions).fill(null);
      this.time = this[subject].time;
      this.corrects = 0;
      this.incorrects = 0;
      this.blank = 0;
      this.plusScore = this[subject].plusScore;
      this.minusScore = this[subject].minusScore;
      this.chosenQuiz = true;
    },
    selectOption(index, response) {
      // TODO: fix changing wrong answer to wrong answer
      this.rightWrong[this.questionIndex] = response.correct === true;
      this.corrects = this.rightWrong.reduce((n, val) => n + (val === true), 0);
      this.incorrects = this.rightWrong.reduce((n, val) => n + (val === false), 0);
      // eslint-disable-next-line no-undef
      Vue.set(this.userResponses, this.questionIndex, index);
    },
    next() {
      if (this.questionIndex < this.quiz.questions.length) {
        this.questionIndex += 1;
      }
    },

    prev() {
      if (this.questionIndex > 0) {
        this.questionIndex -= 1;
      }
    },
    // Return "true" count in userResponses
    score() {
      let score = 0;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[
            this.userResponses[i]
          ] !== 'undefined'
          && this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score += this.plusScore;
        }
        if (
          typeof this.quiz.questions[i].responses[
            this.userResponses[i]] !== 'undefined'
          && !this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score -= this.minusScore;
        }
      }
      return Math.max(Math.round(score * 100) / 100, 0);

      // return this.userResponses.filter(function(val) { return val }).length;
    },
    decrementOrAlert() {
      if (this.time > 0) {
        // eslint-disable-next-line no-plusplus
        this.time--;
        return;
      }
      // alert('Se acabó el tiempo!');
      clearInterval(this.timer);
    },
  },

  created() {
    this.timer = setInterval(this.decrementOrAlert, 1000);
  },
  beforeMount() {
    this.companies = MOCK_DATA;

    this.filters.primero = {
      social: false,
      atencion: false,
      emocion: false,
    };
    this.filters.segundo = {
      aprendizaje: false,
    };
    this.companies.forEach(({ rating }) => {
      if (this.convocatoria.max < rating) this.convocatoria.max = rating;
      if (this.convocatoria.min > rating) {
        this.convocatoria.min = rating;
        this.filters.convocatoria = rating;
      }

      /*      keywords.forEach((category) => {
        this.$set(this.filters.categories, category, false);
      }); */
    });
  },
};

// inject svg spritesheet
fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/mock-logos.svg')
  .then((response) => response.text()).then((sprite) => {
    const figure = document.createElement('figure');
    figure.style.display = 'none';
    figure.innerHTML = sprite;
    document.body.insertBefore(figure, document.body.children[0]);
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html {
    box-sizing: border-box;
    font-size: 100%;
    height: 100%;
    font-family: 'Libre Franklin', sans-serif;
  }
  html.lato {
    font-family: "Lato", sans-serif;
  }
  html.prompt {
    font-family: "Prompt", sans-serif;
  }

  body {
    position: relative;
    height: 100%;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* reset */
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border-radius: 0;
    border: none;
    outline: none;
    background: none;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-before: 0;
    -webkit-padding-start: 0;
    -webkit-padding-end: 0;
    -webkit-padding-after: 0;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  *:active,
  *:hover {
    outline: 0;
  }

  b, i, em, strong,
  h1, h2, h3, h4, h5, h6,
  th, td, pre, ins, del, address,
  input, select, button, textarea {
    text-transform: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: normal;
    font-style: normal;
    letter-spacing: inherit;
  }

  textarea,
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-clip: padding-box;
  }

  a, ins, del, button {
    color: inherit;
    text-decoration: none;
  }

  ul, ol,
  menu {
    list-style: none;
  }

  table,
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }

  pre,
  textarea {
    overflow: auto;
    max-width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  form {
    width: 100%;
  }

  button {
    cursor: pointer;
    overflow: visible;
  }

  textarea {
    resize: none;
  }

  input[type='range'] {
    -webkit-appearance: none;
    background-color: transparent;
  }
  input[type='range']::-ms-track {
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  .content {
    position: relative;
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    color: #3d5358;
    max-width: 780px;
    margin: 0 auto;
  }
  .content__list {
    position: relative;
    margin-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 5rem;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .company {
    cursor: pointer;
    position: relative;
    width: calc(100% / 2 - 1rem);
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-left: 1rem;
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-radius: 6px;
    background-color: white;
    box-shadow: 0 0 0 1px #c5d0d1;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-origin: 10% 50%;
    transform-origin: 10% 50%;
    z-index: 1;
  }
  .company:hover {
    cursor: pointer;
    background-color: #0e4850;
    transition: background-color 0.8s, color 0.8s;
    color: white;
  }
  @media (min-width: 800px) {
    .company {
      width: calc(100% / 3 - 1rem);
    }
  }
  .company-move {
    -webkit-transition: all 600ms ease-in-out 50ms;
    transition: all 600ms ease-in-out 50ms;
  }
  .company-enter-active {
    -webkit-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
  }
  .company-leave-active {
    -webkit-transition: all 200ms ease-in;
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }
  .company-enter, .company-leave-to {
    opacity: 0;
  }
  .company-enter {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  .company__data {
    line-height: 1.3;
  }
  .company__label {
    font-size: 0.8rem;
  }
  .company__convocatoria {
    text-align: center;
  }
  .company__info {
    padding: 0 0.75rem;
    text-align: center;
  }
  .company__logo {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
  }
  .company__name {
    height: 2.5rem;
    margin: 0.75rem 0 0.2rem 0;
    font-size: 1.3rem;
    font-weight: 200;
    text-align: center;
  }
  .company__slogan {
    height: 2rem;
    text-align: center;
    font-weight: 400;
    text-transform: capitalize;
  }
  .company__details {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 1.5rem;
    padding: 0.5rem 0.75rem;
    background-color: rgba(197, 208, 209, 0.1);
    border-top: 1px solid #c5d0d1;
  }
  .company__subject:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .nav {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
    margin: 0 1rem;
    padding: 2rem 0.5rem 1rem;
    border-bottom: 1px solid #c5d0d1;
  }
  .nav__controls {
    display: -webkit-box;
    display: flex;
  }
  .nav__icon {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }
  .nav__label {
    position: relative;
    margin-left: 1rem;
    text-transform: capitalize;
    z-index: 1;
    cursor: pointer;
  }
  .nav__label::after {
    content: '\00d7';
    display: inline-block;
    color: transparent;
    width: 0.5rem;
    font-weight: 400;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition: -webkit-transform 150ms ease-in-out;
    transition: -webkit-transform 150ms ease-in-out;
    transition: transform 150ms ease-in-out;
    transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;
  }
  .nav__label--clear {
    color: #f68185;
    opacity: 0;
    -webkit-transform: translate3d(-25%, 0, 0);
    transform: translate3d(-25%, 0, 0);
    pointer-events: none;
    -webkit-transition: all 275ms ease-in-out;
    transition: all 275ms ease-in-out;
  }
  .nav__label--filter ~ .nav__label--clear {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    pointer-events: auto;
  }
  .nav__label--filter::after, .nav__label--active::after {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .nav__label--filter::after {
    content: '\2022';
    color: #46d2c4;
  }
  .nav__label--active::after {
    content: '\00d7';
    color: #f68185;
  }

  .dropdown {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit-transition: height 350ms;
    transition: height 350ms;
  }
  .dropdown::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background-image: -webkit-gradient(linear, left bottom, left top,
    from(white), to(rgba(255, 255, 255, 0)));
    background-image: linear-gradient(to top, white, rgba(255, 255, 255, 0));
  }
  .dropdown-enter, .dropdown-leave-to {
    opacity: 0;
  }
  .dropdown-leave, .dropdown-enter-to {
    opacity: 1;
  }
  .dropdown-enter-active, .dropdown-leave-active {
    position: absolute;
    width: 100%;
    -webkit-transition: opacity 200ms ease-in-out;
    transition: opacity 200ms ease-in-out;
  }
  .dropdown-enter-active {
    -webkit-transition-delay: 100ms;
    transition-delay: 100ms;
  }

  .filters {
    padding: 0 1rem;
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: start;
    align-items: flex-start;
  }
  .filters__item {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border: 1px solid #c5d0d1;
    border-radius: 6px;
    font-size: 0.8rem;
    line-height: 1.35;
    cursor: pointer;
    -webkit-transition: all 275ms;
    transition: all 275ms;
  }
  .filters__item:hover {
    border-color: #379a93;
  }
  .filters__item--active {
    color: white;
    border-color: #379a93;
    background-color: #379a93;
  }
  .filters__convocatoria {
    width: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding: 1.5rem 0;
  }
  .filters__range {
    width: 200px;
    margin-top: 1rem;
    color: inherit;
  }
  .filters__range::-webkit-slider-thumb {
    width: 0.8rem;
    height: 0.8rem;
    margin-top: calc(-0.4rem + 2px);
    border-radius: 100%;
    background-color: currentColor;
  }
  .filters__range::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background-image: -webkit-gradient(linear, left top, right top, from(white), to(#46d2c4));
    background-image: linear-gradient(to right, white, #46d2c4);
  }

  .modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 1;
  }
  .modal-enter-active, .modal-leave-active {
    -webkit-transition: opacity 350ms;
    transition: opacity 350ms;
  }
  .modal-enter, .modal-leave-to {
    opacity: 0;
  }
  .modal-leave, .modal-enter-to {
    opacity: 1;
  }
  .main_transition {
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }
  .main_transition-enter-active, .main_transition-leave-active {
    -webkit-transition: opacity 1500ms, margin-top 0s .2s;
    transition: opacity 1500ms, margin-top 0s .2s;
  }
  .main_transition-enter, .main_transition-leave-to {
    opacity: 0;
    transition: none;
  }
  .main_transition-leave, .main_transition-enter-to {
    opacity: 1;
  }
  .modal__content {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 90%;
    max-width: 500px;
    min-height: 250px;
    padding: 1.5rem 1rem;
    background-color: white;
    border: 1px solid #c5d0d1;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 0.5rem 1.75rem -0.25rem rgba(61, 83, 88, 0.4);
  }
  .modal__title {
    font-weight: 400;
    font-size: 1.5rem;
  }
  .modal__link {
    margin-top: 1.5rem;
    position: relative;
    font-size: 1.2rem;
    font-weight: 300;
    z-index: 0;
  }
  .modal__link::after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    z-index: -1;
    -webkit-transition: background-color 225ms ease-out;
    transition: background-color 225ms ease-out;
  }
  .modal__link:hover::after {
    background-color: #46d2c4;
  }
  .modal__close {
    position: absolute;
    top: 0.25rem;
    right: 1rem;
    font-size: 1.75rem;
    font-weight: 400;
    opacity: 0.5;
    -webkit-transition: opacity 150ms ease-out;
    transition: opacity 150ms ease-out;
  }
  .modal__close:hover {
    opacity: 1;
  }

  body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    height: 100vh;
    background: #cfd8dc;
    /* mocking native UI */
    cursor: default !important;
    /* remove text selection cursor */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* remove text selection */
    user-drag: none;
    /* disbale element dragging */
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .button {
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .title,
  .subtitle {
    font-family: Montserrat, sans-serif;
    font-weight: normal;
  }

  .animated {
    -webkit-transition-duration: 0.15s;
    transition-duration: 0.15s;
  }

  .container {
    margin: 0 auto;
    padding-top: 1.5em;
  }

  .questionBox {
    margin: 0 auto;
    max-width: 30rem;
    width: 30rem;
    min-height: 30rem;
    background: #fafafa;
    position: relative;
    display: -webkit-box;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .questionBox header {
    background: rgba(0, 0, 0, 0.025);
    padding: 1.2rem;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .questionBox header h1 {
    font-weight: bold;
    margin-bottom: 1rem !important;
  }

  .questionBox header .progressContainer {
    width: 60%;
    margin: 0 auto;
  }
  .progressContainer {
    width: 60%;
    margin: 0 auto;
  }

  .questionBox header .progressContainer > progress {
    margin: 0;
    border-radius: 5rem;
    overflow: hidden;
    border: none;
    color: #3d5afe;
    width: 100%;
  }

  .questionBox header .progressContainer > progress::-moz-progress-bar {
    background: #3d5afe;
  }

  .questionBox header .progressContainer > progress::-webkit-progress-value {
    background: #3d5afe;
  }

  .questionBox header .progressContainer > p {
    margin: 0;
    margin-top: 0.5rem;
  }

  .questionBox .titleContainer {
    margin: 0 auto;
    padding: 1.5rem 1.5rem 0 1.5rem;
    text-align: left;
  }
  .questionBox .titleDate {
    padding: 0 1.5rem 0 1.5rem;
    text-align: left;
    font-style: italic;
    font-size: 0.8em;
    color: darkgrey;
  }

  .questionBox .quizForm {
    display: block;
    white-space: normal;
    height: 100%;
    width: 100%;
  }

  .questionBox .quizForm .quizFormContainer {
    height: 100%;
    margin: 15px 18px;
  }

  .questionBox .quizForm .quizFormContainer .field-label {
    text-align: left;
    margin-bottom: 0.5rem;
  }

  .questionBox .quizCompleted {
    width: 100%;
    padding: 1rem;
    text-align: center;
  }

  .questionBox .quizCompleted > .icon {
    color: #ff5252;
    font-size: 5rem;
  }

  .questionBox .quizCompleted > .icon .is-active {
    color: #00e676;
  }

  .questionBox .questionContainer {
    white-space: normal;
    height: 100%;
    width: 100%;
  }

  .questionBox .questionContainer .optionContainer {
    margin-top: 12px;
    -webkit-box-flex: 1;
    flex-grow: 1;
  }

  .questionBox .questionContainer .optionContainer .option {
    border-radius: 10px;
    padding: 9px 18px;
    margin: 0 18px;
    margin-bottom: 12px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.85);
    border: transparent 1px solid;
    text-align: left;
  }

  .questionBox .questionContainer .optionContainer .option.is-selected {
    border-color: rgba(0, 0, 0, 0.25);
    background-color: white;
  }

  .questionBox .questionContainer .optionContainer .option.is-correct {
    border-color: rgba(0, 0, 0, 0.25);
    background-color: rgba(186, 224, 120, 0.99);
  }

  .questionBox .questionContainer .optionContainer .option.is-wrong {
    border-color: rgba(0, 0, 0, 0.25);
    background-color: rgb(250, 140, 136);
  }

  /*.questionBox .questionContainer .optionContainer .option:hover {*/
  /*  background-color: rgba(0, 0, 0, 0.1);*/
  /*}*/

  .questionBox .questionContainer .optionContainer .option:active {
    -webkit-transform: scaleX(0.9);
    transform: scaleX(0.9);
  }

  .questionBox .questionContainer .questionFooter {
    background: rgba(0, 0, 0, 0.025);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    align-self: flex-end;
  }

  .questionBox .questionContainer .questionFooter .pagination {
    margin: 15px 25px;
  }

  .pagination {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .button {
    padding: 0.5rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 0 0.25rem;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .button:hover {
    cursor: pointer;
    background: #eceff1;
    border-color: rgba(0, 0, 0, 0.25);
  }
  .actionButton:hover {
    cursor: pointer;
    background: #e3e7ea;
    color: black;
    border-color: rgba(0, 0, 0, 0.25);
  }

  .button.is-active {
    background: #3d5afe;
    color: white;
    border-color: transparent;
  }

  .button.is-active:hover {
    background: #0a2ffe;
  }

  @media screen and (min-width: 769px) {
    .questionBox {
      -webkit-box-align: center;
      /*align-items: center;*/
      -webkit-box-pack: center;
      /*justify-content: center;*/
    }

    .questionBox .questionContainer {
      display: -webkit-box;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 769px) {
    .questionBox {
      width: 100%;
    }
  }
</style>
