create table users (
    id serial primary key,
    name varchar,
    email varchar,
    password varchar
);

create table board (
    id serial primary key,
    name text,
    phrase text,
    speed text,
    shape text,
    range text,
    image text,
    price real
);

create table board_specs (
    board_id integer references board(id),
    range text,
    speed text,
    grade text,
    mode text,
    weight text,
    dim text,
    power text,
    braking text,
    deck text,
    wheels text,
    trucks text,
    app text,
    remote text,
    charge text
);

drop table cart

create table cart(
user_id integer references users(id),
board_id integer references board(id),
quantity integer
);

insert into board (name, phrase, speed, shape, range, image, price)
values (
'Backfire Stealth', 
'The pinnacle of performance', 
'24 mph Top Speed', 
'Super Flex Composite Deck', 
'Extended Range (14 Miles)', 
'https://images.ctfassets.net/axbo81ontyws/5BKWL1v6OQMg8i6aQAoC0u/8ac6c3dfdbf51e29a3b7d8e0acaa4490/boosted-stealth-electric-skateboard.jpg', 
1599.00
),
(
'Backfire Plus',
'The new classic',
'22 mph Top Speed',
'Super Flex Composite Deck',
'Extended Range (14 Miles)',
'https://images.ctfassets.net/axbo81ontyws/6flso0mhjiWAsEEkgsOyeG/5c7a4c486d5bd6f509f2e003200fe903/boosted-plus-side-by-side.jpg',
1399.00
),
(
'Backfire Mini X',
'Where power meets agility',
'20 mph Top Speed',
'Deep Dish Composite Deck',
'Extended Range (14 Miles)',
'https://images.ctfassets.net/axbo81ontyws/3Fnnx90jtY0Q06coiGcGcG/9d5694c766133ca5459438fc5a214ec2/boosted-mini-x-side-by-side.jpg',
999.00
),
(
'Backfire Mini S',
'Small & mighty',
'18 mph Top Speed',
'Deep Dish Composite Deck',
'Standard Range (7 Miles)',
'https://images.ctfassets.net/axbo81ontyws/lK3J7nV4uyIaqiiyKCA0G/341c04ad024ade091e5af7b6c29d7c2b/boosted-mini-s.jpg',
749.00
)
