import { MixPlayer } from "../addon/binding.js";

MixPlayer.load("./tests/test_audio.mp3");

MixPlayer.play();

setTimeout(() => {}, 10000);
