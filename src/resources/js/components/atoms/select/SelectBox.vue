<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';

/* type 定義 */
// Optionの形
type OptionObject = { text: string, value: string|number|null };
// 画面引数型
type Props = {
    modelValue: OptionObject['value'], // モデル値 (v-model)
    defaultOption?: OptionObject, // (任意) デフォルト オプション
    options?: OptionObject[], // オプション一覧
}

// 画面引数
const props = withDefaults(defineProps<Props>(), {
    // 初期表示 モデル値
    modelValue: null,
    // デフォルトオブション
    defaultOption: () => ({text: '', value: null}),
    // オプション一覧
    options: () => [],
});
// input 内容変更 → モデルの値 通知 処理定義
const emit = defineEmits(['update:modelValue']);
// 選択 値
const selected = computed({
    // getter
    get() { return props.modelValue; },
    // setter
    set(val) { emit('update:modelValue', val); }, // 値変更通知
});
</script>

<template>
    <!-- エリアコードの一覧表示 TODO:したの セレクトボックスだけでコンポーネント化しても良いかと -->
    <select v-model="selected">
        <!-- デフォルト オプション -->
        <option :value="props.defaultOption.value" disabled>{{ props.defaultOption.text }}</option>
        <!-- 各 オプション -->
        <option v-for="(option, index) in props.options" :key="index" :value="option.value">
            {{ option.text }}
        </option>
    </select>
</template>
