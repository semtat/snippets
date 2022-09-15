import { sortList } from "../../algos/bubble_sort.js"

function testBubbleSort(list, oldList) {
    sortList(list)
    if (list.length !== oldList.length) {
        console.log('Incorrect')
    } else {
        console.log((list.every((el, idx) => el === oldList[idx])) ? 'Correct' : 'Incorrect')
    }
}

testBubbleSort([], [])
testBubbleSort([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
testBubbleSort([0, 22, -28, -1, 34, 0], [-28, -1, 0, 0, 22, 34])
testBubbleSort([1, 4, 28, 177, 42, 99], [1, 4, 28, 42, 99, 177, 123])
testBubbleSort([0, 89, 0, 567, 1111, 2654654], [0, 0, 89, 567, 1111, 2654654])