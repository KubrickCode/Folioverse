import { Router } from "express";
import { careerService } from "../service/careerService.js";

const careerRouter = Router();

/** 해당 유저 career 추가 */
careerRouter.post("/", async function (req, res, next) {
  try {
    // 토큰에서 받아올 수 있게 수정
    const user_id = req.user._id;

    // req (request) 에서 데이터 가져오기
    const yearly = req.body.yearly;
    const job = req.body.job;

    const newcareer = await careerService.addCareer({
      user_id,
      yearly,
      job,
    });

    res.status(201).json(newcareer);
  } catch (error) {
    next(error);
  }
});

// 해당 유저 career 조회(전체)
careerRouter.get("/list", async function (req, res, next) {
  try {
    const user_id = req.user._id;
    const career = await careerService.getUserCareerInfo({
      user_id,
    });

    if (career.errorMessage) {
      throw new Error(career.errorMessage);
    }

    res.status(200).send(career);
  } catch (error) {
    next(error);
  }
});

// 해당 career 조회
careerRouter.get("/:id", async function (req, res, next) {
  try {
    const _id = req.params.id;
    const career = await careerService.getCareerInfo({
      _id,
    });

    if (career.errorMessage) {
      throw new Error(career.errorMessage);
    }

    res.status(200).send(career);
  } catch (error) {
    next(error);
  }
});

// 해당 career 수정
careerRouter.put("/:id", async function (req, res, next) {
  try {
    const _id = req.params.id;
    // body data 로부터 업데이트할 사용자 정보를 추출함.
    const yearly = req.body.yearly ?? null;
    const job = req.body.job ?? null;

    const toUpdate = { yearly, job };

    // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
    const career = await careerService.updateCareer({
      _id,
      toUpdate,
    });

    if (career.errorMessage) {
      throw new Error(career.errorMessage);
    }

    res.status(200).json(career);
  } catch (error) {
    next(error);
  }
});

/** 해당 career 삭제 */
careerRouter.delete("/:id", async function (req, res, next) {
  try {
    const _id = req.params.id;

    const career = await careerService.deleteCareer(_id);

    if (career.errorMessage) {
      throw new Error(career.errorMessage);
    }

    // No content status 204
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default careerRouter;
