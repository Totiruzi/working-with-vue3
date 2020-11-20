<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p class="mt-10 mb-2 text-right text-3xl w-40 h-15 overflow-scroll"
        style="direction:rtl">{{currentNum}}
      </p>
      <small>{{prevNumb}} {{selectedOperation}} {{currentNum}}</small>
      <div class="grid grid-cols-4 gap-1">
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('1')">1</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('2')">2</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('3')">3</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('+')">+</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('4')">4</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('5')">5</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('6')">6</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('-')">-</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('7')">7</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('8')">8</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('9')">9</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('*')">x</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('c')">C</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('0')">0</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('=')">=</button>
        <button class="p-2 w-10 h-10 border rounded" @click="buttonPressed('/')">/</button>
      </div>
    </div>
  </section>
</template>

<script>
import {onMounted, onUnmounted, ref} from 'vue'
export default {
  setup(){
    const currentNum = ref("");
    const operations = ['+', '-', '*', '/', 'c'];
    const numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    const calculation = ref("");
    const prevNumb = ref("");
    const selectedOperation = ref("")

    const buttonPressed = (value) => {
      if (value === '=' ||value === 'Enter'){ calculate()
      }else if(value === 'c') {
        clear()
      } else if(operations.includes(value)) {
        applyOperation(value)
      } else if(numb.includes(value)){
        appendNumber(value);
      }
    }

    const appendNumber = (value) => currentNum.value = currentNum.value + value;

    const applyOperation = (value) => { 
      calculate()
      prevNumb.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;

    }

    const calculate = () => {
      if (selectedOperation.value === '*') {
        multiply()
      } else if (selectedOperation.value === '/') {
        divide()
      } else if (selectedOperation.value === '+') {
        add()
      } else if (selectedOperation.value === '-') {
        subtract()
      }
      prevNumb.value = '';
      selectedOperation.value = ''
    }

    const clear = () => currentNum.value = '';

    const multiply = () => currentNum.value = prevNumb.value * currentNum.value;

    const divide = () => currentNum.value = prevNumb.value / currentNum.value;

    const add = () => currentNum.value = +prevNumb.value + +currentNum.value;

    const subtract = () => currentNum.value = prevNumb.value - currentNum.value;

    const handleKeydown = e => buttonPressed(e.key)

    onMounted(() => window.addEventListener('keydown',handleKeydown))

    onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

    return {currentNum, buttonPressed, appendNumber, applyOperation, calculate, clear, calculation, prevNumb, selectedOperation}
  }
  
}
</script>

<style>

</style>