# Tools.js
Free jQuery tools for websites. <a href="http://ionden.com/tools/">Страница проекта</a>

## Возможности
* Работает на jQuery 1.7+
* Удобное решение повседневных рутинных задач
* Модульность, можно подключать компоненты на выбор
* Легкое подключение и использование
* Кроссбраузерность. IE 7.0+ и все современные браузеры.
* <a href="http://ionden.com/tools/license.html">Лицензия MIT</a>


## Компоненты
* tools.mobile - определяет мобильные браузеры
* tools.fuck - фильтр мата

## Tools.mobile
* содержит 2 переменные: <code>check</code> и <code>browser</code>
* tools.mobile.check - вернет <code>true</code>, если вы открыли страницу мобильным браузером (вроде Safari на iPhone и т.п.)
* tools.mobile.browser - вернет название мобильного устройства/браузера
* <a href="http://ionden.com/tools/#mobile">Демо</a>

## Tools.fuck
* Метод <code>tools.fuck.check(текст[, mask])</code> определяет матершину в словах и возвращает текст, где все матные слова заменены на звездочки
* Не обязательный аргумент <code>mask</code>: вы можете передать методу шаблон замены в виде строки, например "[censored]"
* <a href="http://ionden.com/tools/#fuck">Демо</a>