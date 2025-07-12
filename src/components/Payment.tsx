"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import React from "react"
import Image from "next/image"
import { Textarea } from "./ui/textarea"

type validPayment = "card" | "digital-wallet" | "qrcode";

export default function Component({ name, mode, pack, price, pickup }: { name: string, mode: string, pack: string, price: string, pickup: string }) {
  const min = pack.toLowerCase() === "custom" ? 0 : Number(price.split("-")[0]);
  const max = pack.toLowerCase() === "custom" ? Infinity : Number(price.split("-")[1]);

  const [payment, setPayment] = React.useState<validPayment>("card");
  const [donatePrice, setDonatePrice] = React.useState<number>(min);
  const shipmentPrice = 35;
  const [discount, setDiscount] = React.useState<number>(Math.floor(donatePrice * 0.1));
  const [finalPrice, setFinalPrice] = React.useState<number>(min);

  React.useEffect(() => {
    setDiscount(Math.floor(donatePrice * 0.1));
    const price = mode === "รับเลี้ยง" ? (pickup === "delivery" ? shipmentPrice : 0) : donatePrice - Math.floor(donatePrice * 0.1);
    setFinalPrice(price < 0 ? 0 : price);
  }, [donatePrice]);

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto py-8 px-4">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>การชำระเงินในการ{mode} {name}</CardTitle>
            <CardDescription>กรอกข้อมูลสำหรับการ{mode} {name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {payment === "card" &&
              <>
                <div className="grid gap-2">
                  <Label htmlFor="cardNumber">เลขบัตรเครดิต</Label>
                  <Input id="cardNumber" placeholder="4111 1111 1111 1111" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiration">วันหมดอายุ</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Select>
                        <SelectTrigger id="expiration-month">
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger id="expiration-year">
                          <SelectValue placeholder="YY" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => (
                            <SelectItem key={i + 2023} value={(i + 2023).toString()}>
                              {i + 2023}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
                {mode === "บริจาคให้" ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="cardholderName">ชื่อเจ้าของบัตร</Label>
                      <Input id="cardholderName" placeholder="วรัตตรา วิภูศิริคุปต์" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="price">ราคาที่ต้องการ{mode} {name}</Label>
                      <Input
                        id="price"
                        type="number"
                        min={min}
                        max={max}
                        placeholder={price.toLowerCase() === "none" ? "เลือกราคาที่ต้องการ" : `${price} บาท`}
                        onChange={(e) => setDonatePrice(Number(e.target.value))}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <Label htmlFor="cardholderName">ชื่อเจ้าของบัตร</Label>
                      <Input id="cardholderName" placeholder="วรัตตรา วิภูศิริคุปต์" />
                    </div>
                    {pickup === "delivery" &&
                      <div>
                        <Label htmlFor="address">ที่อยู่</Label>
                        <Textarea
                          id="address"
                          placeholder="9/16 หมู่ 17 ถนนพหลโยธิน ตำบลคลองหนึ่ง อำเภอคลองหลวง จังหวัดปทุมธานี"
                          rows={3}
                          className="resize-none"
                        />
                      </div>
                    }
                  </>
                )
                }
              </>
            }
            {payment === "digital-wallet" &&
              <>
                <div className="grid gap-2">
                  <Label htmlFor="walletProvider">ผู้ให้บริการวอลเล็ต</Label>
                  <Select>
                    <SelectTrigger id="walletProvider">
                      <SelectValue placeholder="เลือกวอลเล็ต" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="truemoney">TrueMoney</SelectItem>
                      <SelectItem value="promptpay">PromptPay</SelectItem>
                      <SelectItem value="linepay">LINE Pay</SelectItem>
                      <SelectItem value="applepay">Apple Pay</SelectItem>
                      <SelectItem value="googlepay">Google Pay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="wallet-id">เบอร์โทร / อีเมลที่เชื่อมกับวอลเล็ต</Label>
                  <Input id="wallet-id" placeholder="089xxxxxxx หรือ example@email.com" />
                </div>

                {mode === "บริจาคให้" ? (
                  <div className="grid gap-2">
                    <Label htmlFor="price">ราคาที่ต้องการ {mode} {name}</Label>
                    <Input
                      id="price"
                      type="number"
                      min={min}
                      max={max}
                      placeholder={price.toLowerCase() === "none" ? "เลือกราคาที่ต้องการ" : `${price} บาท`}
                      onChange={(e) => setDonatePrice(Number(e.target.value))}
                    />
                  </div>
                ) : (
                  pickup === "delivery" &&
                  <div>
                    <Label htmlFor="address">ที่อยู่</Label>
                    <Textarea
                      id="address"
                      placeholder="9/16 หมู่ 17 ถนนพหลโยธิน ตำบลคลองหนึ่ง อำเภอคลองหลวง จังหวัดปทุมธานี"
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                )}
              </>
            }
            {payment === "qrcode" &&
              <div className="flex justify-center items-center">
                <Image
                  src={"/assets/qrcode.jpg"}
                  width={300}
                  height={300}
                  alt="QRcode"
                  className=""
                />
              </div>
            }
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ตัวเลือกการชำระเงิน</CardTitle>
            <CardDescription>เลือกรูปแบบการชำระเงินที่ต้องการ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4" onValueChange={(value: validPayment) => setPayment(value)}>
              <div>
                <RadioGroupItem value="card" id="card" className="peer sr-only" />
                <Label
                  htmlFor="card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CreditCardIcon className="mb-3 h-6 w-6" />
                  บัตรเครดิต
                </Label>
              </div>
              <div>
                <RadioGroupItem value="digital-wallet" id="digital-wallet" className="peer sr-only" />
                <Label
                  htmlFor="digital-wallet"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <WalletCardsIcon className="mb-3 h-6 w-6" />
                  ดิจิทัลวอลเล็ต
                </Label>
              </div>
              <div>
                <RadioGroupItem value="qrcode" id="qrcode" className="peer sr-only" />
                <Label
                  htmlFor="qrcode"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <QRCodeIcon className="mb-3 h-6 w-6" />
                  คิวอาร์โค๊ด
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>การสรุปข้อมูลแพ็คเกจ</CardTitle>
            <CardDescription>ตรวจสอบความถูกต้องของแพ็คเกจ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span>ราคาแพ็คเกจ</span>
                <span>฿{donatePrice.toFixed(2)}</span>
              </div>
              {mode === "รับเลี้ยง" && pickup === "delivery" &&
                <div className="flex items-center justify-between">
                  <span>ค่าจัดส่ง</span>
                  <span>฿{shipmentPrice.toFixed(2)}</span>
                </div>
              }
              {mode === "บริจาคให้" &&
                <div className="flex items-center justify-between">
                  <span>ส่วนลด</span>
                  <span>-฿{discount.toFixed(2)}</span>
                </div>
              }
              <Separator />
              <div className="flex items-center justify-between font-semibold">
                <span>ราคารวม</span>
                <span>฿{finalPrice.toFixed(2)}</span>
              </div>
            </div>
            {mode === "รับเลี้ยง" &&
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span>จำนวน</span>
                  <span>1</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>การจัดส่ง</span>
                  <span>{pickup === "delivery" ? "มาตรฐาน (3-5 วัน)" : "มารับเอง"}</span>
                </div>
              </div>
            }
          </CardContent>
        </Card>
        <Button size="lg" className="w-full bg-pink-500 hover:bg-pink-400">
          ยืนยัน
        </Button>
      </div>
    </div>
  )
}

function CreditCardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function QRCodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="5" height="5" />
      <rect x="3" y="16" width="5" height="5" />
      <rect x="16" y="3" width="5" height="5" />
      <path d="M16 16h.01M20 16h.01M16 20h.01M20 20h.01M10 8h4M10 12h4M10 16h4" />
    </svg>
  );
}


function WalletCardsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  )
}