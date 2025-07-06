"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import Image from "next/image";
import Link from "next/link"

function DonatePackage({ position, name, mode }: { position: string, name: string, mode: string }) {
  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <>
      <div className="relative w-screen h-screen">
        <Image
          src={`/assets/detail/${name}.jpg`}
          alt="dogs"
          fill
        />
        <div className={`absolute ${position}`}>
          <Button
            onClick={() => setOpenDialog(true)}
            className="rounded-full px-16 py-8 opacity-40 text-transparent bg-transparent hover:bg-slate-100"
          >
            Confirmm
          </Button>
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <form>
          <DialogContent className="sm:max-w-5xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl">เลือกแพ็คเกจ</DialogTitle>
              <DialogDescription className="text-lg">
                เลือกแพ็คเกจที่ต้องการ
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <Link href={{
                pathname: "/payment",
                query: { name: name, mode: mode, package: "University", price: "50-100" }
              }}>
                <div className="grid grid-cols-2 gap-3 hover:bg-slate-200 dark:hover:bg-sky-700 hover:scale-105">
                  <Label className="text-lg cursor-pointer">แพ็คเกจสำหรับพี่มหาลัย 50-100 บาท (โดยจะมีการอัพเดตรูปภาพของสุนัขทุก 6 เดือน)</Label>
                  <Image
                    src={"/assets/packages/student.jpg"}
                    width={500}
                    height={400}
                    alt="img"
                  />
                </div>
              </Link>
              <Link href={{
                pathname: "/payment",
                query: { name: name, mode: mode, package: "Adult", price: "300-500" }
              }}>
                <div className="grid grid-cols-2 gap-3 hover:bg-slate-200 dark:hover:bg-sky-700 hover:scale-105">
                  <Label className="text-lg cursor-pointer">แพ็ตเกจที่ 2 (ผู้ใหญ่) 300-500 (อัพเดตรูปภาพทุก 3 เดือน หากบริจาคครบ 1 ปีจะมีสิทธิเจอสุนัข 2 ครั้ง)</Label>
                  <Image
                    src={"/assets/packages/adult.jpg"}
                    width={500}
                    height={400}
                    alt="img"
                  />
                </div>
              </Link>
              <Link href={{
                pathname: "/payment",
                query: { name: name, mode: mode, package: "VIP", price: "1000-10000" }
              }}>
                <div className="grid grid-cols-2 gap-3 hover:bg-slate-200 dark:hover:bg-sky-700 hover:scale-105">
                  <Label className="text-lg cursor-pointer">แพ็คเกจที่ 3 (VIP) สำหรับคนรักมาก 1000-10000 บาท (ได้รับเป็นรูปและวิดีโอทุกอาทิตย์และเจอสุนัขตอนไหนก็ได้)</Label>
                  <Image
                    src={"/assets/packages/vip.jpg"}
                    height={400}
                    width={500}
                    alt="img"
                  />
                </div>
              </Link>
              <Link href={{
                pathname: "/payment",
                query: { name: name, mode: mode, package: "Custom", price: "None" }
              }}>
                <div className="grid grid-cols-2 gap-3 hover:bg-slate-200 dark:hover:bg-sky-700 hover:scale-105">
                  <Label className="text-lg cursor-pointer">แพ็คเกจที่ 4 ตามใจผู้บริจาค</Label>
                  <Image
                    src={"/assets/packages/custom.jpg"}
                    width={500}
                    height={400}
                    alt="img"
                  />
                </div>
              </Link>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">ยกเลิก</Button>
              </DialogClose>
              <Button type="submit">ตกลง</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  )
}

export default DonatePackage