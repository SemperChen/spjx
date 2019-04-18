import {Toast} from "native-base";

const showShort = (content, isAlert) => {
    Toast.show({
        text: content,
        buttonText: "确定",
        type: "warning"
    })
}

const showLong = (content, isAlert) => {
    Toast.show({
        text: content,
        buttonText: "确定",
        type: "warning",
        duration:2500
    })
}

export default {
    showShort,
    showLong
};
