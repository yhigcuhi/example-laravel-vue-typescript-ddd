<script setup lang="ts">
/* import vue*/
import {computed} from 'vue';
/* import vuex*/
import {useStore} from '@/store';
/* import 部品*/
import SelectBox from '@/components/atoms/select/SelectBox.vue';
/* import util*/
import {map} from 'lodash';

// store
const store = useStore();

// 選択値
const options = computed(() => {
    // チーム一覧取得
    const teams = store.getters['team/teams']();
    // 選択オプションの形へ
    return map(teams, ({team_cd, name}) => ({value: team_cd.value(), text: name.value()}));
});

// 一覧取得
store.dispatch('team/fetchAll');
</script>

<template>
    <SelectBox :default-option="{text: 'チームを選択してください', value: null}" :options="options"/>
</template>
