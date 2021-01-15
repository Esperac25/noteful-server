module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL || 'postgres://hydervkufzddbn:508bb3df8695a81ebd11b3918c3868e9747e05eeee0cad80885376adc2153da4@ec2-52-22-135-159.compute-1.amazonaws.com:5432/d54hbetl514b61',
};
