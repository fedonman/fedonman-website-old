---
title: The new Azure Machine Learning Designer
date: "2020-04-19"
layout: post
draft: false
path: "/posts/the-new-azure-machine-learning-designer/"
tags:
  - "Microsoft Azure"
  - "Azure Machine Learning"
  - "Machine Learning"
description: "Out of all the public cloud platforms, Microsoft Azure has adopted all most all the steps in machine learning life cycle into cloud. Though the resources and the abilities are there, sometimes finding the correct cloud-based product or service to adopt for your solution might be a problem. Providing a perfect answer for that issue, Azure has come up with the whole new Azure Machine Learning Studio which is in the preview by the time am blogging this!"
---

Out of all the public cloud platforms, Microsoft Azure has adopted all most all the steps in machine learning life cycle into cloud. Though the resources and the abilities are there, sometimes finding the correct cloud-based product or service to adopt for your solution might be a problem.

Providing a perfect answer for that issue, Azure has come up with the whole new Azure Machine Learning Studio which is in preview by the time am blogging this! Don’t get confused with the AzureML Studio, the drag and drop interface we had before. This is a new thing. There’s no framework dependency or restrictions for using these services. You can easily adapt your open source machine learning code base (may be written with Python, sci-kit learn, TensorFlow, PyTorch, Keras… anything).

In order to use this one-stop solution in Azure you may have to create an Azure Machine Learning Service from Azure portal. Then it’ll direct you for the new interface. You can either go for the Enterprise pricing tier or for the Basic tier. In basic tier you won’t get the visual designer and Automated ML features. So, make sure you have selected Enterprise tier.

![Make sure you have selected the Enterprise tier for the full features](./01.svg)

When Azure Machine Learning resource is successfuly deployed you can access the new Studio interface by visiting [ml.azure.com](ml.azure.com)

Let’s go through each and every tab we got in the side pane in the latest release and see what can we do with them.

## Notebooks

These are fully managed Jupyter notebook instances on cloud. These notebook servers are running on top of a new VM instance type called "notebookVM". There notebookVMs are fully configured work environments to do your machine learning and data science tasks. No need to worry about installing all the python packages and its dependencies. All are already there! You have the privilege to change the notebook sizes (yes, GPU enabled VMs are also there) or install new packages through a python package manager.

## Automated ML

This feature is not available in the basic tier. Automated ML is a process of selecting the best suited algorithm for the dataset you are having. Right now, this is supporting classification, regression and time series forecasting for tabular data formats. There is no support for deep learning based computer vision applications yet. Deep learning based text analysis is also in preview. The Automated ML process runs a set of machine learning algorithms on top of your provided data and see which one gives the best accuracy metric. Good for building prototypes and even in some cases might be in production.

## Designer

This is the evolution of Azure ML Studio (old drag-n-drop interface). Here you can build the complete ML workflow by dragging and dropping modules. If you want can integrate R or python scripts in the experiment. The machine learning service endpoint can be exposed through a Azure Kubernetes Service (AKS) deployment.