#!/usr/bin/env node

const Spinner = require('cli-spinner').Spinner;
const getresult = require('./getresult.js');

var spinner = new Spinner('正在非常拼命的帮你查.. %s');
spinner.setSpinnerString('|/-\\');
spinner.start();

const input = process.argv[2];

getresult(input,spinner);