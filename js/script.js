document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('formYes').classList.remove('hidden')
    document.getElementById('options').classList.add('hidden')
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('formNo').classList.remove('hidden')
    document.getElementById('options').classList.add('hidden')
});
