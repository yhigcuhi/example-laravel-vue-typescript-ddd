<script setup lang="ts">
/* import vue*/
import {ref} from 'vue';
/* import 部品 */
import TeamSelectBox from '@/components/organisms/select/TeamSelectBox.vue';

const team_cd = ref(null);
// TODO: bladeからもらうパターン
// defineProps<{players: []}>();

</script>
<template>
    <!-- TODO:適当なサンプルデザイン  -->
    <div class="row">
        <!-- タイトル -->
        <h1 class="h3 mb-2 text-dark">Mリーガー</h1>
        <!-- 選択ボックス -->
        <div class="card shadow my-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">チーム選択</h6>
            </div>
            <div class="card-body">
                <TeamSelectBox v-model="team_cd" />
            </div>
        </div>
    </div>
</template>
