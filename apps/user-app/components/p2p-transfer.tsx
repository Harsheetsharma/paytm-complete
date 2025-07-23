"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { use, useState } from "react";
import { P2Ptransfer } from "../app/lib/actions/p2ptransfer";

export default function () {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <Card title="Send">
      <div className="">
        <TextInput
          label="Number"
          placeholder="7638592753"
          onChange={(e) => {
            setNumber(e);
          }}
        ></TextInput>
        <TextInput
          label="Number"
          placeholder="Amount"
          onChange={(e) => {
            setAmount(Number(e));
          }}
        ></TextInput>
        <div className="flex justify-center pt-4">
          <Button
            onClick={async () => {
              await P2Ptransfer(number, amount * 100);
              window.location.href = "/transfer";
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </Card>
  );
}
