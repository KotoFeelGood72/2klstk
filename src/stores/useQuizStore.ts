import { defineStore, storeToRefs } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    quiz: [] as any[],
    currentStep: 1, // Текущий шаг
    selectedOptions: [] as any[], // Выбранные опции для каждого шага
    steps: [
      {
        title: "Есть ли у вас готовый проект?",
        options: [
          { title: "Есть" },
          { title: "Нет" },
          { title: "Выберу из готовых вариантов" },
          { title: "Хочу заказать индивидуальный проект" },
        ],
      },
      {
        title: "Какой дом вы желаете построить?",
        options: [
          {
            title: "Дом с классической крышей",
            image: "@/assets/images/calc/small.png",
          },
          {
            title: "Дом с плоской крышей",
            image: "@/assets/images/calc/medium.png",
          },
        ],
      },
      {
        title: "Сколько этажей вы желаете:",
        options: [
          { title: "1" },
          { title: "2" },
          { title: "1 + Мансарда" },
          { title: "2 + Мансарда" },
        ],
      },
      {
        title: "Какую площадь дома вы планируете?",
        options: [
          { title: "до 100 м²" },
          { title: "от 100 м² до 200 м²" },
          { title: "от 200 м² до 300 м²" },
          { title: "свыше 300 м²" },
        ],
      },
      {
        title: "Какой облицовочный материал планируете использовать?",
        options: [
          {
            title: "Облицовочный кирпич",
            image: "@/assets/images/calc/small.png",
          },
          {
            title: "Декоративная штукатурка",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Сайдинги",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Искусственный камень",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Фасадные панели",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Другой материал",
            image: "@/assets/images/calc/medium.png",
          },
        ],
      },
      {
        title: "Какой облицовочный материал кровли планируете использовать?",
        options: [
          {
            title: "Черепица",
            image: "@/assets/images/calc/small.png",
          },
          {
            title: "Фальцевая кровля",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Профнастил",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Наплавляемая кровля",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Мембрана",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Другой материал",
            image: "@/assets/images/calc/medium.png",
          },
        ],
      },
      {
        title: "Есть ли участок под строительство?",
        options: [{ title: "Есть" }, { title: "Нет" }],
      },
      {
        title: "Что бы вы хотели в дополнение к своему дому?",
        options: [
          {
            title: "Терраса",
            image: "@/assets/images/calc/small.png",
          },
          {
            title: "Ландшафтный дизайн ",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Забор",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Беседка",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Баня",
            image: "@/assets/images/calc/medium.png",
          },
          {
            title: "Другое",
            image: "@/assets/images/calc/medium.png",
          },
        ],
      },
      {
        title: "Какой бюджет:",
        options: [
          { title: "до 6 млн " },
          { title: "от 6 млн до 9 млн" },
          { title: "от 9 млн до 12 млн" },
          { title: "от 12 млн до 15 млн" },
          { title: "свыше 15 млн" },
        ],
      },
      {
        title: "Когда планируете строительство?",
        options: [
          { title: "в течение 2-3 мес" },
          { title: "в течение полугода" },
          { title: "в течение года" },
          { title: "еще не определился " },
        ],
      },
      {
        title: "При заказе дома от 100 м²",
        options: [
          { title: "Биосептик" },
          { title: "Дизайн проект дома" },
          { title: "2% Скидка" },
        ],
      },
      {
        title: "Оставьте свои данные и менеджер свяжется с вами",
        name: "",
        phone: "",
      },
    ],
  }),
  actions: {
    initializeSelectedOptions() {
      // Инициализация массива выбранных опций с пустыми значениями
      this.selectedOptions = Array(this.steps.length).fill(null);
    },

    setSelectedOption(stepIndex: number, option: any) {
      this.selectedOptions[stepIndex] = option;
    },

    addQuizData(newData: any) {
      // Проверка, есть ли уже такой объект в массиве
      const exists = this.quiz.some(
        (data: any) =>
          data.step === newData.step &&
          data.selectedOption.title === newData.selectedOption.title
      );

      if (!exists) {
        this.quiz.push(newData);
      } else {
        console.warn("Этот вариант уже был выбран для данного шага.");
      }
    },

    updateCurrentStep(step: number) {
      this.currentStep = step; // Обновляем текущий шаг
    },

    // Переход к следующему шагу
    nextStep() {
      if (this.currentStep < this.steps.length) {
        this.currentStep++;
      }
    },

    // Переход к предыдущему шагу
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    // Проверка на последний шаг
    isLastStep() {
      return this.currentStep === this.steps.length;
    },

    // Сброс квиза
    resetQuiz() {
      this.currentStep = 1;
      this.quiz = [];
      this.initializeSelectedOptions();
    },
  },
});

// Использование storeToRefs
export const useQuizStoreRefs = () => storeToRefs(useQuizStore());
