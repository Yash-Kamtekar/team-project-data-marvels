
create table roomtypes(
roomtypeid int primary key, 
Type varchar(16),
multiplier decimal(4,2));
create table rooms(
roomid int primary key,
hotelid int,
roomtypeid int,
roomprice float,
foreign key (hotelid) references hotels(hotelid),
foreign key (roomtypeid) references roomtypes(roomtypeid)
);
create table amenities(
id int primary key,
amenity_name varchar(32),
cost decimal(4,2)
);
create table users(
userid int primary key,
username varchar(32),
email varchar(32),
phone varchar(16),
rewards int
);
create table hotels(
hotelid int primary key,
hotelname varchar(32),
address varchar(64),
country varchar(32),
stars decimal(4,2)
);
create table bookings(
bookingid int primary key,
hotelid int, 
userid int,
startDdate date,
endDate date,
amount float,
FOREIGN KEY (userid) REFERENCES users(userid),
FOREIGN KEY (hotelid) REFERENCES hotels(hotelid)
);
