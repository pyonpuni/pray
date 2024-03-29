import { run, test } from "t0"
import * as _assert from "assert"
import { encode, decode } from "."

const { equal, ok } = _assert

test("encode", () => {
  equal(encode(Buffer.from("f")), "Zg")
  equal(encode(Buffer.from("fi")), "Zmk")
  equal(encode(Buffer.from("fis")), "Zmlz")
  equal(encode(Buffer.from("fish")), "ZmlzaA")
  equal(encode(Buffer.from([248])), "-A")
  equal(encode(Buffer.from([252])), "_A")
})

test("decode", () => {
  equal(decode("Zg").toString(), "f")
  equal(decode("Zmk").toString(), "fi")
  equal(decode("Zmlz").toString(), "fis")
  equal(decode("ZmlzaA").toString(), "fish")
  ok(Buffer.from([248]).equals(decode("-A")))
  ok(Buffer.from([252]).equals(decode("_A")))
})

run()
