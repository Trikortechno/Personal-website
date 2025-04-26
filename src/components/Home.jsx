import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// Using free-to-use images from Unsplash
const heroImage =
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80";
const feature1Image =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const feature2Image =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";


const Home = ({ menuOpen }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Enhanced parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Optimized solutions that load in milliseconds",
      image: feature1Image,
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Enterprise-grade security for your peace of mind",
      image: feature2Image,
    },
    {
      icon: "🌐",
      title: "Global",
      description: "World-class infrastructure with 99.9% uptime",
      image: heroImage,
    },
  ];

  const projects = [
    {
      title: "Portfolio Websites for Professionals",
      description: "Devloped various portfolios for professionals",
      tags: ["Full stack"],
      image:
        "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/cbb72910929969d756afae024a2afbcec013b2816e5297557d9c43f839a42d7c1609310895766.jpg",
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Websites for Government",
      description: "Anti Drug website for awareness",
      tags: ["Full stack"],
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAELCAMAAAC77XfeAAABU1BMVEX7w0ojIyMAAAD/x00hJCT7xUkhJCEOFyIAABukgDvvu1MAABIAABfwvVH7xUztuk0iJCf8wkz/yk38w0f6w02gfj2KcDP/yEn9wkndrU37wk7/y032v0//yVE7LhkuKiLOoUUAEBtTRik9NiIAAAgADR4dGx+5kD8jHxUVGRoACR4dHSWAZjV4ZTb/zEfSqUuGbjs9MSIUHCElICfJoUMAACGihj5gTiuzjUdsWC5PQCbgsEm6kj6rhzoAEyJqVy+FazMWEyQACxTlt1wLGx0ZFRoaEhr2vVXovEjapkQbHisAFh71xlrEnk+QdzZSRTIzLCkpGyaogUYWHxpcRilfVCp8ajdLRy05MCS/nlIyLh6vkk7Lm0otKyxpWy4xJiIAACWFdzuRcUV3Z0OUfjbIplCNakCZgEsYFw/YqFd5XytJNxqylkCfh0tnTykrIxKMbCr46mnqAAAffUlEQVR4nO2d/X/SyNrwE4aBFkvCZCZMSDKWUqEWCokUgTbQou7e1lXwfno8farb4x5fut3dU88+//9PzzWhauuRmhJq9WyvfhRIQvLNcM31Mm9R1O9ZlKsGiCVj+tz3Jkk1lcqN6ddvLNz43mTh3npqTH//Qfb7E/OH9TH9XBZZlvZ9iZhPn2jOQlb57gTNp5P/BfSpuQy+apgLyzX91ck1/dXJNf3VyTX9lEKxQmOe4uroKUKxzzE7essQIA6yKFEUZotQHE4sqikU3mKFKQi2UEWzLMyFXghcQZn1TdDz4sLqjz+uPjWzDPTB0tQfpSy/0xxGuHfjxxsZrsDr//yYgd0a698pV8vl0qET66Izo0eH5Vout57aSh8bcC8PF3O5WrNWqd58iLn9qFpL74xfmzsW0+xOOZf820+p2pzPvg36YllVf7yfhkShiyhxF9XVzpvFpro1Qjb3ltTVDCHyNZUhXGw8Xq8sPC3dr6lLwTdCv5RTn2TNx2puqWBhdzFXLjaebNaSm0KhhXJuNUMJ9aDIdYp6d9XUncBh2c6Cx78Z+soObQzvq826kPRLB1yMmsllW/tIvyTpjaeVZCXDNa65rYb9zdCrO5Yitiu1lKu5i7WtYkOUkpWSwU7oGR+XfWYpec/nlgY200CIsumt/szpeT+dqgLpYq72xt9spuZWELbO0HOvqpZ7iAZ1H2TtMIbLmi29q1DeXcrdD6i7mFQr6Zpa/ZVhEpa9Tgka00P9rrYoLs6l0+nmXBtNf92Z0qdcaqOj9PrjHaCvqZVkqjl05L5CWW3qhEq9X9V5UM2lwS4F1dSfOTXdjlFvZ0xPOPtftbKMoNaup9/9n1ptWygKhrIH0wiKfrCVS+nUXkzWSo4C7vjJYu7boc9phrvdVMttpIDN2Sr2quqWLzQCxQxl7CDHT6uLcId+c7286yDqdNO5hUKci84uUlhaT837i831HzY1bLHF5FJLvKqq1Ta3sbaYWm/Wze10qtkxFM0FnVqqH7TqS7n0tqNNbzRnSZ/KpZvrucfLWYWE9AfcLjXVpSJXUHsul/spvbq+PldEiiVa1aTa3Ko2c7XFrEa+hVrbkibkcfle3gUTSFiyereFaEatlqsBZWIw16zUmlsLXSM82Fus1v5WS9/dzsQK8WdGrwXzZrvdbe2A+4GPrN9uQwjDC23YCFuMgvlm+8185iSmJ9rKoLM9KggIn78FekwRR4hzgqXvJBTcqIzzNYQQBt2AiJ4bHL2P5sFzIcMAa/ONxPdXIn8VeoLf/8jYHjsYC/RBbrMYtmXlY/IEVLE+Hk/gD2Mi99kKCb+DCQcrQ040hsFu2AMidQ9qj4UVG05DLFkfmEXCExFlQg4TmV7jhuNoJ28FGG1FsVlDYHkpRzhC3hWxDENo2tiMwEbDMBqESBrsNESY92q2Dcc4VF4LwSZNgZPAcbANaZLUFpATI6rB3Vk2NtyHwiHapAQsMj3NbG4uFyQYKi6XNovwjuc3n2lQOm7p2aaJwh+hU3p6MDYr7NmzUqn0rN4S0gbBl0tSlgPCu0+fPctC6k56m6VtyNRHT8NdmyP4Ikbe39Pp5MueLCfMM/XVdKXTdewJaBHpMUPtcuWxb8hS0MurWyODQjTQnPMo0bxqs9zjso1jOFdJd0T4DTe1mms2a81qR9ogPd2sJWu1GhzP58vNrTWZ+66Uay+Ehta25J5aeg/o0fOFWqqm1uby8nxeuqmqudW57UltJ1HLHovlipprurIgjVKtWeIyckymIb7lu81k+iEco4ntmqqWg/BaLgQHy/sQNZfn4bNeUVNV2csn6SH3hQgZ6Jdqy5K+uf63hRs3FupwXGY1l1xaXUqXZbpr7FfWy6v3q3OH1gSvEJm+WAWyrb404txM5358QtH841yzIyCBqsELFDANmjk1l/YRHdOXD5zMnVzl/4qQfmmYAWEM6FO5yj6oTC+kN9aalY2HsCurwaat2uIDkWnnDQtK55/rf/PEk+MNYxJZRHpmbDRri8nKprBluL6kLhWJ0amkUhVIAtVk2pR+CI3SucVcctGVFgjSk60WEn5T3bdD+mrAKQV7A/TrKfXxwIA8BugVY63WrDuUYgw31E9DFk8VxKBe4GI5pQpO+eRGk6h6n3msLj2vqDdkG4At/reWHiFX9q9Xi8KrpsoFaTrZi1z655vJ8jEHexjSG87GT6ubYdnnyocuCFf4/GNQ7WTZs49P6H9qbsAe2emHDuZyP5UgfqDS/mZu5Gr7B8Afl14etu90ms01aRictSZEul5Z/UcynW8c/bC+z8BQo1Z5XWX5e5WStH1An86vrKVT5Xc8pFcrq6urqazF5+/lOv4PtU3RT4/pV2sp2LXUhVOLjXKqVi0Nw1jOGN1N1ZaWV8TE1tqI9GK/AukFpEZpV36pV679KEbN9LvbzadOp9aUJoQ0OpXVgQgey/ackF5NL6XVaseCT1mgV3O5pqpIvQftWFzfavdO6Jup9VwyV5b0lra3sLpem6tLw2Wh9o10Llf9uzspGopGj1pLatrbefCL+riPoCTANCx5pdrSk83KamYxV+0hoHoAxwz1zNPkPd8I6ZOr6+rqPJP2Auhzy3dAZNkDvQNpl3rUPNGc1D9g34sVaas0VKiXwdTkjdCn64N0bT3dQTFsDrGd7WZKraTB1FWeOhZTREltrv1j9aljptOv0up9qbPGKK0m4ZikmvvFlXqfqvmruXReyCoh9d4zkGz0BvrapiFe/pQEExzSp6HWIjBmDDMLYU0Ed1K51SyhGBGOdkqVXHVSc2GksqeZdC70KDV1vVqEeASZabWppk2nUF5PrjdLcGmNLVbUppSaCipMgb5abFdTd9tSCfRKsupJm2ORkF5YmVoudYqec0ypTb1jYWHj3b1UOsCWPu8QLg631PvDCZl7JHpkVtXFjpQXuWad21Q2SKrJaoGwX5Jq8t68IJgOq2pKHrKxnKyUhNSc8mFju5mstgAMyj7d9UDccdk7jHfvqyf0zUqn4HnFQCFis9ppBd6dv9VUV+Pbc5vHQaEEp4hT9rbYX0+PHEg+nGPQbRcclliEglt0Ka+DLy8XIKgSnWZtW4BuCK+cmisg2QzbQu5+MvU/cJNQ9ql0eWlpIfS1TWlEEeS8kh58bU5dKpfn6ojvLuRqS/eXauuP6wYeLqi5reYSxA1PnRgxJqSstYWAjlVo9Z+yAcZ4s1VbqhsWWrnbbC7ajNFgrnk3/IGxtv94ac+QQVALkSB97/GijvV0ulZp1tILHuFmNS3plWCpmX4h6cugbTU4HbeDzbl0pVZbvft0h9Cgc1dur1RfZLQYNoeb9bo/Nlry7Ws4jhbf1OstMD96vV6H+BLTLryRASfBaGWjXifuWn27YEHgVq+/3EVufSzbAeXDN/U8kjEdfMUXDM2f7HsHGmYM9zZf3NkGE481y/EGm/vLf593KZlUrhHoGReCn4T28E6aL0wMw5GOSzNkeoohtIU3yrhlBt6CqxcNBB8Jh/021cZBvGFA2kuMhix6Nj5u/E0QJC/BqI2EJsYxpcY5Yuy8zrlItdbm1B7fPlRYQixZwpiMN2GZF8n8WyEaHtPDFkxti4RZldwNx9hUJlCwybZgX+g74RsEc0hBwj3EkudjkHtZxDrxrXAlcHXn5O2RY8wzL18W8uG/878Y4ZBz5K+SlX8U+P0VmUYr47owrs8UXLIsvw8BFXtfrtLXgkLQ9y1+VBnXQjb+1slBsugZ+fBdeQj9ItAF6bls++I24VhWMS71nIbNCQ7iYC4tAjp90qjKCZXVmXOILACHn1gOcP7Ilrl8eJt2+EKxbEqw+IdwxmqEtzopnZ2SnrZQEBCmmKbMylFPZqJFF8sc1TQLlqYXUJGRkIEcEm2IMCvumraCgrc9Om5rwMP2yAMuVzoH1JLHopY40MEu9c2d8CqYPDFXZNTa1b+AdDF6NHBansV2TMEsi+lPs9IDhA2p2u4DsDhBT4zYuPq5d1yvZGD6TnflfXrDlffNgF0PLBcqymQS5QWTZ83kwdYf/PyEjX0qbQfzgczVCl9oo70Yvaib9QLiDzsmA53oelD4fF5+z0J9GYsEG+Y2Cgnow1ftXV9g1H7dwkAf7MyfRFqoJ5mQ2SrA9rw82Bi8EVD02mtTGys+M7VeUabts6VHA6PnIaq3wQM5YvvoZUjPP9L3Rf6k6chtzx/mJX0GKibQZ80z9G7n6C2SZS+Vb+3nFQT+wAnejo9BJusVYO+s6fNG0bOw3jGLnATzxq5OrbYvi4z3A2zjoI9G4HDG9A0xEFhp59suEPtr+rhflmAJZg2HIg/1YWBCRsXzTj5gVmaQb4X0lHj+3hN4XQkmhQhT0YMn1zTGGpBEM65hCnpKcHZHelPb1iyosLZy0pFDn1CN2ZSN023mYuacuOvQI8vOIXmPO0w25jPqWBB1PORj923zHdmFMWubA6wKoWDnNCybSOX1McMyVMCKFnZ6g708sZhg4C24W3xiasJjxu/kBsikJD6W7Uxw29KaYtsZHwvfZGEZ4C/1aP31fO23I9f0VyfX9Fcn1/RXJ9f0VyfX9Fcn1/RfFNkA8YVIfTr5GvSUn9NxFksun55xOwgChhQ8++K/ZHqiWY3h8lK1vNh2rdmf/7LLnor8Qk1V19XychB/psancsn0FurfTY1nf//0gk3qRJhaLpkeu2pyDJ/KbZlo0miJaeWS6elw6f3M+5y6787a9FwyPV9Lf1w5oFyYteZfMr14mvxIv9X7avRk6l9ZNvO8H1jAlnMf6dP9afpHzpOJ9BpFBp9mfDPFGJyrNj6ZvX+KfmslxkSBz8pEelocHfitKX5qS2RbK54djlFR3NP01XgTfD4jE+nZXqaD6hd17gQrbLBaXaqqbSStO7tTec+eVBfdOMGCRdl/9AVNpBd/DEvehek1wutbIes/X8oRWaJU+QBfNnkcetsVCo5KTzMH2b6usIvNpJOTk8b+KbUgx9sgOY5hLLVNFnbVKWi6yZ28UB8an3z1HItJlYurqcVXtlJjI5nbtxVbDoUZu1q1WVCwTZDQW71WIAdrXXCGIWmId5uDlTP4M7b3hK+UT1xrCiqpTVvlE72p/oy4zY3h03S5XL5fGiLLuhg+0dcgTj07UWIyvRxMf+HCt0hwPzc2M7kf5OjebGUcJWwNBCZkp1Nelbei1sr17AUdiq1nkfJJnDTZW7XNeXP+4hoqNt5renPbIFhW25yaSm8YVEHZ/Q+1QE13RPzfeiI98jN6oE9xxp07tTFfpSQshbbT6nrq3jYokeJuVlKnrH8xfq412eYgTOgUvpba+vI9VWpPpWQolAXl9dxqicm5GuaWekq22hf8YbWsq7tnw9TZR2mMP3xZTaZyYdljRWxWcukCVCCeqZ2GV8vFCwb7wcgcLXbPVMWZ01vUxqJbAUOZ25Saw7tLze2wR3x0KlhWc+UNcbFqy5jTygdn7cjkKM3WMzq6qLcK+aGcg+1qRd0POxGzqa0VGVu6++u55GqzVqlUaumqOrInjtf6vGiZzptWz4tmMcVg1H7rTxuQW0arVC7vyLCH+3MyH7eCu+XVp53tje3t7brZygpML1YwlttqFYvBmdR4Ir3rN4zGr/a0y01oVLQ2R/J31vRVVyMK7W+2spoYD0/j1kXZw6E/CH8Spk2k56PXr3wzTjKEkCeH1WHelpOBLM9FM29Rm+ytkOuyeJkcCy0uZmO7y7/Yb39xmUiPbazZ8QprPJaLnKSDhH/FlkDwLxaecfPLzGUivcUzDTpNpPA15Zw4Z2A6foy1Di5H7Gj2XvMbxbU33xq9hqPRo6HG3fxs6GOt03JGsmuPTtvByXGO5J5NCwbWZmYr2dkZKF+j58eeqlUrinyVfqthf1bNUOxsgPE16JGZn1nza/GSs5P/FD4jeoS48C+zReSzMht6HPRB/MvNrT4js6G33EIQFPToeq+heIs1nMhs6DVmWZ80Rp1Lr1FzeMEGr8/KrPRekflqxLY0ueBE1p2Fs50hvc2jZYZEjrXV8Cyc/Iz0Xv5ju9FsjkZtzmYT38+GnmG5HkNEi0k0V3xpAHlEmQ0999YGg712NHrk+9vvZhPfz4aeUDkHM2Lvg/tK5Bt7MTPbscyw1n4ik23OASa8O5PIfFb0TKM0apQWLhkyi4vOip5wlB1eas/PZ2VGcQ5rmXuvz06H+H7oSfB38/D46+dWM6K3UNDfOP5O43sbM4wM9yvnVgQjc8Djjw7B4RQj8nXLnjiueOs7MxhNSkM5s+kciwl+bQbJNGXuy1u3NuIP6rJ0zyt4Z1dWmNxneOgPg9EM9FVsJkBKdtxwler90a/HXrQIWdRF3ZzBgyx4N3FL4ndcK954RqI1gqETMc4R28Ha0Jv+YlixLIjxeHZVssMN/GuHQ2I3fbMaDd7+WjeH0ew9aXVbKyvTaw6hGuZG9vBO4r3cGgVMXLCj8PQJNR3EjaY5FLLgOCu8U2Z5u6XER5H689u+N3XCw2257B2JaO8h/41X0ewbif+U4kyHpk3WHE44jmPmNPt24s3ROz0ogBRBeis/A/1MOwQm57VdssO7Mc6s2b9BWd8RBCEMIvOibCLhzTRPmZxbjZy1xusYmaHm/pY48k7TWpJ+ph15ky3ms3ap27ngSIjTIukTiYr4uEXSz3YQ/uQ+Qz2AvzjVVpb972dGRWTi0FONYkuJ3hIYS7AF9DdA709tAvrC1BfRqDT32Wj2Pq6E9H7v+amyxnocelLw548W+9FawDXCWTaGkmqWm0jc3NwQH1dkVeKVPZeji5wzvnpya1R7w48zRiSk386bzvtFm0AC0Pvpf2C98+agF7HnR/hO3fGnvtSYvjMYrP0x/LAIciEevee1imd/u8n0nfaz+Q6ZOtTBVL+VePGvf724ffz+B7SCOJozTq7Obpms93phR9+ZvpsbW0Bfb/8sHPReVa14Zf8ZmUxv8ZP1eqYUSX/79qbzcTkr6iUS0xs2TLghOIloMWM3YQL96OD3UzYiHr2CzbW1tZ2IbQpI2FMMZ/woUu8TiV9Oeat49KS1IsSTiL0P4t+l/GAQJyoB+p8fPDgVlaFi4tb09Fqx77IHo2jeitq9o0AoUwtVsp+WPWrFoVd4P583WTRvxbh7ZMZIhEL6dtHTPha+LHt96gg5XEofRWyNQvnFd704k9M00Jzffts0lA8jyVEvkXDjxvfRvBX+PSh4xRiX0SAm87vHQnzoYg3pY5yRYCxw1L4TyGxjuRagL238u1OSM3VCMXqJ36anhwgZtea/UoQMEeWtcTPC2sqJ9F4nfmNTt+dYw567V8hHHCOCwr8YAmWvnrTjjGX/XeL29GXvFLtm4EYc4cL6ziM+HyMrpxDNl5ZPt+Us+4nb0/s/m7dbKFOI5mvtfMw2BUnf2T/TFHUrDj3BlDCLR7T3ndGz0bM4z/0Czbl9+8/bt2/LaC2U3xKL0zdSaEQDfByx1tpZ5sayb1D2P3uHQojbicz42YzdxJ8xxjZqiHMUcd6Join40ymVFxJJLyMFiwF9WOK8m7gZI+4rDEajfNTeZqoREquzCeifFx44RLudGK/SyecTN2NETlpWLk8YMULWY677oQXjsleAfnxq1Ab6r5NbPckbKFZ8L+l/brUMw74Cerc0GMSL74H+5v7NF7e7fyYy42uZQB+jYRS7WU2J1vOjDRp2Iw48BXq/bY7yh6fo/zW93mukPhptB2fM4Dl6zzCL8zPL9o/NzoaDpMUcX8tMyCR9SkGtouM8iRrnxBUE9NtrI6F81PtRYtOY+nyk5ffbu5HHIcdsaZf0e//PNGZFbyuBrgdRZ6jagRtrwRhUgKjyZud02efj0IeDii0tWm6F/O7LWE06uCAt5hB9pOeDRGnSMxAiCT2ZPvcRcmKLSN557sXwjAoOvdWd02U/SDyLR4/I2Rlgk2PMjUF9L46916Dsn3sFrLBTZd+ZvjwonNGsH0SstY7LRZyKC/SQVt128Ad644/ExOdsfVmswmb39xUecQw4UaaeXBvKuOw9iKze04s/EhvT11rGArM+ODtq5Zw5ngqV6zNPraeyryGU9s2EHhaDsZH4w4gR+mlceL1o2QnWGbN3pr9USG92+/3+73+G9EhxYtJjZlEcLc5x8+JtY+pnoWPGHdnXYNtMPPwl8QDSNHA1pcSaI5cLn+6cVD6xIWJ/Ldt7Urfr0+a11o6/3YFae+vWrRvw70Ne/mKjrTnTFT9jiAk7Yu8DMkfwNyU9zf7yYUxOIryJhLyR8HVtykCNBk/f+GtRV4PgINPaN9nWfWZY0Sm5P+WMCs3SR30RNSuPIx/szWfk9pSDGwm2dzoFFHEUtXzU5dT23shPgr8xvPBKCmPB+svS81bEtjQSWPrg92mXQGBcL5xI4N1OFAsfxJ1WG6nrecXDiPRirbEBVmdKeuKw8cBbiglEaVl+8inGGpMWo1ARabSWQO2PYb9Rn9bea/K5tVI0TMI4JxQ5UnBqZQwfFGFF7Duhv3c1NJNRZB8i5NnLZL23OJnNnPiroMcMs/j95ZjbGGJMPcbz4M+Ty16b1MY2glorH3t2CUszXC49NZjXz/+Y2Bh1A3v2C9BcKj1G3sbHMOE3PzuTucan5TLphXnWzd7yph8B/nm5THr9z5tn5M9/i+9oRWH6pCFOiyO+2tqkMxD6iaJg/H2tRa1h7ZTM/PRfZa7b5ck1/dXJNf3VyTX91ck1/dXJNf3VyTX91ck1/dXJNf3VyV+N/tScp0+nP53ZTr9wUKSTfEEuQo8+/HfyemoVpw/v0Icd6NNdypmvvG9a+6SZmn769RnRs0c7SNEfBbJB1QqCgLqPAsQUneqa4haZnA+sKHpQCAjsYHZQsMPGdlTIWFi3iS4bFPRCAY5nmo5ZoSiHmFlaIbAUy7U1qsslgFnRtZSgqCtaoH+56SoyPcXd49dBw3x+KBe7a2wc/M4Dv91tBH2xJow3h0VKD+ocB/N+4PS7Bw8ba8/XbLkcu/nc1/luTw8nsQTmqIDagWsibwSI8ikX7a6L0dMdS/hOW9f8VotnNlqB0VvpfrlrNHrZ45VuvsDNg0ey10zUizs06DZ8sdMVeSPoI4qRabqEF3qIdbuBZbxy+nK9NTEQ3gHq/xq0ZesOarVs3u213nLPfIQlvXxiuRXsdjkaGG0d+YfIyg6KBLeOdr7c+hOZ3uK9424LtQ8DOUbWWfN0K+g6vhMcOwMj6HLbceu7LUSBnq8MgX4gVuQjB+DVO0Ztz+/a8AkXW5z3ey3TKbQL8rR8ZDOK5rt1Yeed9kMsvD3m7v2OsZEdBOfxXLDseXfYPuDmYTiwTdQLAQ5e9Uy+s3ZoIrfuFdHxSuFXoF+xaP95gaE1ry4fG8/z3usAmXr7SD45hx62EO/r7lu7YBbkOCfUfd7bYfXgXcEZeGuaNiysiSdrgW4HnjlDeoL1XkGzgtaBJmuTNywqSssTmGR6jBJ9ZUcLKA8Yzeqc6MOeS4NiNhxExg4ChAPGwrmp2M0QHLhawN1iT+o9FkUPPhrujqWt6MQKellLaQ0DhQ0jPInsIhaTytOdmGG5NtDJ+zOG9ORIespeT4B4v/+jXf9worG/iGAy/yK+9v0y9gqxMPzgBFOFaIQo1KKanGgg3YwtpzQr4V7ZYauMx+/LZ0jCcbBxvCq1Q8J5XFhaXth3spoVY0ThlgWHwG4wa1hOAPii/4xs742Tbj+OEOE258QyLLk8CLepvB9uGxrF45WuNapw6lokfOwD4zayNIQsx0IEw0ZiUPkcCNKAuxcEtnFELYvCYYRjgpBDsa1wIrDVsNn5Lf6R6dHRXjj8mvf9I034r57zoP5qh7/zjxx07IPX8vd2nYe+Lw2JFfj+Dmrt+fJJRMj3e8Q58rsWa4tutnHozzM53g2NXCry/kqDwT7H2BV4ZW8FPGDdNAot7Pp+QAvdxu657eaR6YNdpyiVh+8Kbom8Q2mx1bDRSCAq/IZDFHeXk+NDR6oJGmWDPl8JGvKpFWLgvNJRvnGki3zjLbMHjghtJ3vTkucZ6WjgvAt43rHzDaZYzHS0oIf6BQZOcN/Nn1v4kelF5/VTOX0Ema+HWHSOAuq93MXIf33As2+JAqFLG2nIHDyRv8+RtjMvWm925YR4YwBOV6yZvkPyzluXjfS6DnqNhgUTCd/oFxp50QuMvHDnEVQF14Rwo+d0dfraCbrvRud2U0elx4+eOyM5mFKWPYXypMq47B2OmS+glukmwbbzoC+fh/b2YaFvrBSQ9PVAf+Si/IMRQnmRBy/mdAucwOaj7R2RFyNXDBqmDi7ZzQtbrnwj6dFKwR2J4LhXOncAZ+SyZyN/ryCjruOj0UPRVphVKCKK2kfvFPrc7yLKjommh3pvMf2V71qtcL0WZrx6PeSo73RdPtzrIlTcMyEyVdyu4z0yRq+OHXR0BJvbgj/324bCulQJWpb22g/ITou9ng29BdYlVGpOGmD9NBpOO2MWl4NuONUw4ZacSAeBod0gcsN4jAZYEQ7HSnPIwLhoEKs58qMinxjIEKJgcwRVNA7nCkffIIbhBNKoNWxs89nUWkWuXiOV0A4NtwV2X47CwOGSyUyTRl7ekeQCII1ZJ2M0CIbbDN2DptgaplY40gaPVzyghGkWY5ZmEQbZwHj0DjgUW47lwTaFEPvcQPMv4mu/Sbmmvzq5pr86uaa/Ormmvzq5pr86+S+hV+cu+jjcb0D+q+i170okfW5Mf/+B/t1J1vzhhH59aeH7k3vrqTH9yZO5vx+RrKlU7hT9dynfN/3/BxYBQgHOKdzJAAAAAElFTkSuQmCC",
      liveUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <motion.main
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: menuOpen ? 0.5 : 1 }}
      className={`relative overflow-hidden ${menuOpen ? "blur-sm" : ""}`}
    >
      {/* Hero Section with Modern Glass Morphism */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Tech background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/50"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div style={{ y: textY }} className="lg:w-1/2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Build The Future With{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Trikor
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-300 mb-8 max-w-lg"
              >
                We craft high-performance digital experiences that drive real
                business results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition text-center shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Start Your Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition text-center flex items-center justify-center gap-2"
                >
                  <span>View Projects</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              style={{ y: imageY }}
              className="lg:w-1/2 mt-12 lg:mt-0"
            >
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/30 to-purple-500/30 blur-md group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Main container with glass morphism */}
                <div className="relative w-full aspect-square bg-white/5 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden z-10">
                  {/* Background image with parallax effect */}
                  <motion.img
                    src={heroImage}
                    alt="Technology showcase"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 5 }}
                  />

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                          width: `${Math.random() * 4 + 2}px`,
                          height: `${Math.random() * 4 + 2}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          opacity: Math.random() * 0.5 + 0.1,
                        }}
                        animate={{
                          y: [0, (Math.random() - 0.5) * 40],
                          x: [0, (Math.random() - 0.5) * 40],
                        }}
                        transition={{
                          duration: Math.random() * 10 + 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>

                  {/* Animated content */}
                  <motion.div
                    animate={{
                      rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "easeInOut",
                    }}
                    className="relative z-20 text-center p-6 space-y-6"
                  >
                    {/* Animated rocket with trail */}
                    <div className="relative inline-block">
                      <motion.span
                        className="text-7xl inline-block"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      >
                        🚀
                      </motion.span>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-white/30 blur-md group-hover:w-24 group-hover:bg-white/50 transition-all duration-300"></div>
                    </div>

                    {/* Glowing text */}
                    <motion.p
                      className="text-5xl md:text-6xl font-bold text-white"
                      initial={{ opacity: 0.9 }}
                      animate={{ opacity: [0.9, 1, 0.9] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                        "BELIEVE,
                      </span>
                      <br />
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                        THEN ACHIEVE"
                      </span>
                    </motion.p>

                    {/* Subtle floating dots */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute bg-white/30 rounded-full"
                          style={{
                            width: `${Math.random() * 8 + 4}px`,
                            height: `${Math.random() * 8 + 4}px`,
                          }}
                          animate={{
                            y: [0, (Math.random() - 0.5) * 40],
                            x: [0, (Math.random() - 0.5) * 40],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Reflection effect on hover */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Modern Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Trikor?
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven methodologies to
              deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl shadow-xl h-96" // Added fixed height
              >
                {/* Background image with overlay */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent"></div>

                {/* Content container with padding */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  {/* Icon container with better visibility */}
                  <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md group-hover:bg-blue-500 transition-all duration-300">
                    <span className="text-3xl text-white">{feature.icon}</span>
                  </div>

                  {/* Text content with proper spacing */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase with Modern Hover Effects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Portfolio
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how we've helped businesses transform their digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition shadow-md gap-2"
            >
              <span>View All Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
            alt="CTA background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how we can help you achieve your digital goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition shadow-lg gap-2"
            >
              <span>Get in Touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition gap-2"
            >
              <span>Learn About Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
