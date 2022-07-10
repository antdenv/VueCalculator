<template>
<div class="container">
    <div class="calculator">
        <div class="calculator__output">{{result}}</div>
        <div class="calculator__keys">
            <OperationButton 
                v-for='operation in operations' 
                :key='operation'
                :operation='operation'
                :action='addOperation'
            />
            <NumberButton
                v-for='number in numbers'
                :key='number'
                :number='number'
                :action='addNumber'
            />
            <button 
                class="calculator__key calculator__key--enter"
                v-on:click="calculate"
            >
                =
            </button>
        </div>
    </div>
    <div class="footer">Develop by antdenv <i class='bx bxs-heart bx-tada' ></i></div>
</div>
</template>

<script>
import NumberButton from './NumberButton.vue';
import OperationButton from './OperationButton.vue';

export default {
    components: {NumberButton, OperationButton},
    data() {
        return {
            result: '',
            numbers: ['7', '8', '9', '4', '5', 
            '6', '1', '2', '3', '0', '.', 'AC'],
            operations: ['+', '-', '*', '/'],
        };
    },
    methods: {
        addNumber(number) {
            number == 'AC' ? this.result = '' : this.result += number;
        },
        addOperation(operation) {
            this.result += operation;
        },
        calculate() {
            try {
                const number = eval(this.result); 
                number > 1e7 ? 
                this.result = number.toExponential(3) : 
                this.result = number;
            } catch (error) {
                if (error instanceof SyntaxError) {
                    this.result = 'Ошибка';
                }
            }
        },
    }
};
</script>