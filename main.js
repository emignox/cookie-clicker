
    document.getElementById('countButton').addEventListener('click', function () {
        counter++;
        document.getElementById('counter').textContent = counter;
    });

    let counter = 0;