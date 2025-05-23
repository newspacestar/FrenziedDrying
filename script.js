// Пока я тренируюсь и сижу на диете, то теряю 5% своей массы в день
// А тренируюсь я до тех пор, пока мой вес больше желаемого.
// Сколько дней понадобится провести в таком режиме и запиши количество в переменную days.

let initialWeight = 6000; // Исходный вес в граммах
let targetWeight = 5000; // Желанный вес в граммах
let days = 0;

while (initialWeight > targetWeight) {
  initialWeight *= 0.95;
  days++;
}


//   Инициализация переменных:
//   initialWeight устанавливается в 6000 граммов. Это начальный вес.
//   targetWeight устанавливается в 5000 граммов. Это целевой вес, который мы хотим достичь.
//   days устанавливается в 0. Это счётчик дней, который будет увеличиваться каждый раз, когда вес уменьшается.
//   Цикл while:
//
// Цикл продолжается до тех пор, пока initialWeight больше targetWeight.
//   Внутри цикла initialWeight умножается на 0.95, что эквивалентно уменьшению веса на 5%.
// Переменная days увеличивается на 1 при каждом выполнении цикла.
//   Вывод результата:
//
//   После завершения цикла, когда initialWeight станет меньше или равен targetWeight, выводится количество дней, необходимых для достижения целевого веса.
//   Таким образом, код вычисляет количество дней, необходимых для того, чтобы начальный вес 6000 граммов уменьшился до 5000 граммов, если каждый день вес уменьшается на 5%.
//
// Давай посчитаем, сколько дней потребуется.
//
//   Этот код вычисляет количество дней, необходимых для достижения целевого веса, начиная с исходного веса и уменьшая его на 5% каждый день.
//   В данном случае, на достижение веса 5000 граммов, начиная с 6000 граммов, потребуется 4 дня.